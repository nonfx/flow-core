export type Observer<T> = {
	next: (value: T) => void;
	error?: (error: any) => void;
	complete?: () => void;
};

export type Subscription = {
	unsubscribe: () => void;
};

export class SimpleSubject<T> {
	private observers: Observer<T>[] = [];
	private closed = false;

	subscribe(observer: Observer<T> | ((value: T) => void)): Subscription {
		if (this.closed) {
			return { unsubscribe: () => {} };
		}

		const obs = typeof observer === "function" ? { next: observer } : observer;

		this.observers.push(obs);

		return {
			unsubscribe: () => {
				const index = this.observers.indexOf(obs);
				if (index > -1) {
					this.observers.splice(index, 1);
				}
			}
		};
	}

	next(value: T): void {
		if (this.closed) return;

		this.observers.forEach(observer => {
			try {
				observer.next(value);
			} catch (error) {
				if (observer.error) {
					observer.error(error);
				} else {
					console.error("Error in observer:", error);
				}
			}
		});
	}

	error(error: any): void {
		if (this.closed) return;

		this.observers.forEach(observer => {
			if (observer.error) {
				observer.error(error);
			}
		});
		this.complete();
	}

	complete(): void {
		if (this.closed) return;

		this.observers.forEach(observer => {
			if (observer.complete) {
				observer.complete();
			}
		});
		this.observers = [];
		this.closed = true;
	}
}

export class SimpleBehaviorSubject<T> extends SimpleSubject<T> {
	constructor(private _value: T) {
		super();
	}

	get value(): T {
		return this._value;
	}

	next(value: T): void {
		this._value = value;
		super.next(value);
	}

	subscribe(observer: Observer<T> | ((value: T) => void)): Subscription {
		const subscription = super.subscribe(observer);

		// Emit current value immediately
		const obs = typeof observer === "function" ? { next: observer } : observer;

		try {
			obs.next(this._value);
		} catch (error) {
			if (obs.error) {
				obs.error(error);
			} else {
				console.error("Error in observer:", error);
			}
		}

		return subscription;
	}
}
