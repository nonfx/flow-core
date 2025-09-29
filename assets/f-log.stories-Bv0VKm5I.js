import{n as p,e as g,x as e}from"./iframe-CCyKNv7C.js";const o=`2022/01/05 10:05:36 [ERROR] Log levels other than TRACE are currently unreliable, and are supported only for backward compatibility.
  Use TF_LOG=TRACE to see Terraform's internal logs.
  ----
2022/01/05 10:05:36 [INFO] Terraform version: 0.13.6  
2022/01/05 10:05:36 [INFO] Go runtime version: go1.14.7
2022/01/05 10:05:36 [INFO] CLI args: []string{"/bin/terraform", "plan", "-var-file=/workspace/vg_tf_var_values.tfvars", "-out=/workspace/artifacts/terraform.tfplan", "-state=/workspace/artifacts/terraform.tfstate"}
2022/01/05 10:05:36 [DEBUG] Attempting to open CLI config file: /builder/home/.terraformrc
2022/01/05 10:05:36 [DEBUG] File doesn't exist, but doesn't need to. Ignoring.
2022/01/05 10:05:36 [DEBUG] ignoring non-existing provider search directory terraform.d/plugins
2022/01/05 10:05:36 [DEBUG] ignoring non-existing provider search directory /builder/home/.terraform.d/plugins
2022/01/05 10:05:36 [DEBUG] ignoring non-existing provider search directory /builder/home/.local/share/terraform/plugins
2022/01/05 10:05:36 [DEBUG] ignoring non-existing provider search directory /usr/local/share/terraform/plugins
2022/01/05 10:05:36 [DEBUG] ignoring non-existing provider search directory /usr/share/terraform/plugins
2022/01/05 10:05:36 [INFO] CLI command args: []string{"plan", "-var-file=/workspace/vg_tf_var_values.tfvars", "-out=/workspace/artifacts/terraform.tfplan", "-state=/workspace/artifacts/terraform.tfstate"}
2022/01/05 10:05:36 [WARN] Log levels other than TRACE are currently unreliable, and are supported only for backward compatibility.
  Use TF_LOG=TRACE to see Terraform's internal logs.
  ----
2022/01/05 10:05:36 [DEBUG] New state was assigned lineage "30b7cef7-b64d-e892-d593-385afbe62974"
2022/01/05 10:05:36 [DEBUG] checking for provisioner in "."
2022/01/05 10:05:36 [DEBUG] checking for provisioner in "/bin"
2022/01/05 10:05:36 [INFO] Failed to read plugin lock file .terraform/plugins/linux_amd64/lock.json: open .terraform/plugins/linux_amd64/lock.json: no such file or directory
2022/01/05 10:05:36 [INFO] backend/local: starting Plan operation
2022/01/05 10:05:36 [DEBUG] backend/local: Skipping interactive prompts for variables because input is disabled
2022-01-05T10:05:36.945Z [INFO]  plugin: configuring client automatic mTLS
2022-01-05T10:05:36.987Z [DEBUG] plugin: starting plugin: path=.terraform/plugins/registry.terraform.io/hashicorp/google/3.90.1/linux_amd64/terraform-provider-google_v3.90.1_x5 args=[.terraform/plugins/registry.terraform.io/hashicorp/google/3.90.1/linux_amd64/terraform-provider-google_v3.90.1_x5]
2022-01-05T10:05:36.988Z [DEBUG] plugin: plugin started: path=.terraform/plugins/registry.terraform.io/hashicorp/google/3.90.1/linux_amd64/terraform-provider-google_v3.90.1_x5 pid=23
2022-01-05T10:05:36.988Z [DEBUG] plugin: waiting for RPC address: path=.terraform/plugins/registry.terraform.io/hashicorp/google/3.90.1/linux_amd64/terraform-provider-google_v3.90.1_x5
2022-01-05T10:05:37.025Z [INFO]  plugin.terraform-provider-google_v3.90.1_x5: configuring server automatic mTLS: timestamp=2022-01-05T10:05:37.025Z
2022-01-05T10:05:37.085Z [DEBUG] plugin.terraform-provider-google_v3.90.1_x5: plugin address: address=/tmp/plugin491511690 network=unix timestamp=2022-01-05T10:05:37.085Z
2022-01-05T10:05:37.086Z [DEBUG] plugin: using plugin: version=5
2022-01-05T10:05:37.286Z [WARN]  plugin.stdio: received EOF, stopping recv loop: err="rpc error: code = Unavailable desc = transport is closing"
2022-01-05T10:05:37.288Z [DEBUG] plugin: plugin process exited: path=.terraform/plugins/registry.terraform.io/hashicorp/google/3.90.1/linux_amd64/terraform-provider-google_v3.90.1_x5 pid=23
2022-01-05T10:05:37.288Z [DEBUG] plugin: plugin exited
2022-01-05T10:05:37.288Z [INFO]  plugin: configuring client automatic mTLS
2022-01-05T10:05:37.330Z [DEBUG] plugin: starting plugin: path=.terraform/plugins/registry.terraform.io/hashicorp/google-beta/4.5.0/linux_amd64/terraform-provider-google-beta_v4.5.0_x5 args=[.terraform/plugins/registry.terraform.io/hashicorp/google-beta/4.5.0/linux_amd64/terraform-provider-google-beta_v4.5.0_x5]
2022-01-05T10:05:37.330Z [DEBUG] plugin: plugin started: path=.terraform/plugins/registry.terraform.io/hashicorp/google-beta/4.5.0/linux_amd64/terraform-provider-google-beta_v4.5.0_x5 pid=30
2022-01-05T10:05:37.330Z [DEBUG] plugin: waiting for RPC address: path=.terraform/plugins/registry.terraform.io/hashicorp/google-beta/4.5.0/linux_amd64/terraform-provider-google-beta_v4.5.0_x5
2022-01-05T10:05:37.377Z [INFO]  plugin.terraform-provider-google-beta_v4.5.0_x5: configuring server automatic mTLS: timestamp=2022-01-05T10:05:37.377Z
2022-01-05T10:05:37.445Z [DEBUG] plugin.terraform-provider-google-beta_v4.5.0_x5: plugin address: address=/tmp/plugin358155709 network=unix timestamp=2022-01-05T10:05:37.445Z
2022-01-05T10:05:37.445Z [DEBUG] plugin: using plugin: version=5
2022-01-05T10:05:37.665Z [ERROR]  plugin.stdio: received EOF, stopping recv loop: err="rpc error: code = Unavailable desc = transport is closing"
2022-01-05T10:05:37.668Z [DEBUG] plugin: plugin process exited: path=.terraform/plugins/registry.terraform.io/hashicorp/google-beta/4.5.0/linux_amd64/terraform-provider-google-beta_v4.5.0_x5 pid=30
2022-01-05T10:05:37.668Z [DEBUG] plugin: plugin exited
2022-01-05T10:05:37.668Z [INFO]  plugin: configuring client automatic mTLS
2022-01-05T10:05:37.705Z [DEBUG] plugin: starting plugin: path=.terraform/plugins/registry.terraform.io/hashicorp/kubernetes/2.7.1/linux_amd64/terraform-provider-kubernetes_v2.7.1_x5 args=[.terraform/plugins/registry.terraform.io/hashicorp/kubernetes/2.7.1/linux_amd64/terraform-provider-kubernetes_v2.7.1_x5]
2022-01-05T10:05:37.706Z [DEBUG] plugin: plugin started: path=.terraform/plugins/registry.terraform.io/hashicorp/kubernetes/2.7.1/linux_amd64/terraform-provider-kubernetes_v2.7.1_x5 pid=37
2022-01-05T10:05:37.706Z [DEBUG] plugin: waiting for RPC address: path=.terraform/plugins/registry.terraform.io/hashicorp/kubernetes/2.7.1/linux_amd64/terraform-provider-kubernetes_v2.7.1_x5
2022-01-05T10:05:37.820Z [INFO]  plugin.terraform-provider-kubernetes_v2.7.1_x5: configuring server automatic mTLS: timestamp=2022-01-05T10:05:37.820Z
2022-01-05T10:05:37.882Z [DEBUG] plugin.terraform-provider-kubernetes_v2.7.1_x5: plugin address: address=/tmp/plugin912257780 network=unix timestamp=2022-01-05T10:05:37.882Z
2022-01-05T10:05:37.882Z [DEBUG] plugin: using plugin: version=5
2022-01-05T10:05:38.077Z [ERROR]  plugin.stdio: received EOF, stopping recv loop: err="rpc error: code = Unavailable desc = transport is closing"
2022-01-05T10:05:38.080Z [DEBUG] plugin: plugin process exited: path=.terraform/plugins/registry.terraform.io/hashicorp/kubernetes/2.7.1/linux_amd64/terraform-provider-kubernetes_v2.7.1_x5 pid=37
2022-01-05T10:05:38.080Z [DEBUG] plugin: plugin exited
2022-01-05T10:05:38.080Z [INFO]  plugin: configuring client automatic mTLS
2022-01-05T10:05:38.115Z [DEBUG] plugin: starting plugin: path=.terraform/plugins/registry.terraform.io/hashicorp/null/3.1.0/linux_amd64/terraform-provider-null_v3.1.0_x5 args=[.terraform/plugins/registry.terraform.io/hashicorp/null/3.1.0/linux_amd64/terraform-provider-null_v3.1.0_x5]
2022-01-05T10:05:38.116Z [DEBUG] plugin: plugin started: path=.terraform/plugins/registry.terraform.io/hashicorp/null/3.1.0/linux_amd64/terraform-provider-null_v3.1.0_x5 pid=44
2022-01-05T10:05:38.116Z [DEBUG] plugin: waiting for RPC address: path=.terraform/plugins/registry.terraform.io/hashicorp/null/3.1.0/linux_amd64/terraform-provider-null_v3.1.0_x5
2022-01-05T10:05:38.124Z [INFO]  plugin.terraform-provider-null_v3.1.0_x5: configuring server automatic mTLS: timestamp=2022-01-05T10:05:38.124Z
2022-01-05T10:05:38.178Z [DEBUG] plugin.terraform-provider-null_v3.1.0_x5: plugin address: address=/tmp/plugin988965841 network=unix timestamp=2022-01-05T10:05:38.178Z
2022-01-05T10:05:38.178Z [DEBUG] plugin: using plugin: version=5
2022-01-05T10:05:38.274Z [ERROR]  plugin.stdio: received EOF, stopping recv loop: err="rpc error: code = Unavailable desc = transport is closing"
2022-01-05T10:05:38.275Z [DEBUG] plugin: plugin process exited: path=.terraform/plugins/registry.terraform.io/hashicorp/null/3.1.0/linux_amd64/terraform-provider-null_v3.1.0_x5 pid=44
2022-01-05T10:05:38.275Z [DEBUG] plugin: plugin exited
2022-01-05T10:05:38.275Z [INFO]  plugin: configuring client automatic mTLS
2022-01-05T10:05:38.316Z [DEBUG] plugin: starting plugin: path=.terraform/plugins/registry.terraform.io/hashicorp/random/3.1.0/linux_amd64/terraform-provider-random_v3.1.0_x5 args=[.terraform/plugins/registry.terraform.io/hashicorp/random/3.1.0/linux_amd64/terraform-provider-random_v3.1.0_x5]
2022-01-05T10:05:38.316Z [DEBUG] plugin: plugin started: path=.terraform/plugins/registry.terraform.io/hashicorp/random/3.1.0/linux_amd64/terraform-provider-random_v3.1.0_x5 pid=52
2022-01-05T10:05:38.316Z [DEBUG] plugin: waiting for RPC address: path=.terraform/plugins/registry.terraform.io/hashicorp/random/3.1.0/linux_amd64/terraform-provider-random_v3.1.0_x5
2022-01-05T10:05:38.333Z [INFO]  plugin.terraform-provider-random_v3.1.0_x5: configuring server automatic mTLS: timestamp=2022-01-05T10:05:38.330Z
2022-01-05T10:05:38.392Z [DEBUG] plugin.terraform-provider-random_v3.1.0_x5: plugin address: address=/tmp/plugin202016026 network=unix timestamp=2022-01-05T10:05:38.392Z
2022-01-05T10:05:38.393Z [DEBUG] plugin: using plugin: version=5
2022-01-05T10:05:38.467Z [ERROR]  plugin.stdio: received EOF, stopping recv loop: err="rpc error: code = Unavailable desc = transport is closing"
2022-01-05T10:05:38.468Z [DEBUG] plugin: plugin process exited: path=.terraform/plugins/registry.terraform.io/hashicorp/random/3.1.0/linux_amd64/terraform-provider-random_v3.1.0_x5 pid=52
2022-01-05T10:05:38.468Z [DEBUG] plugin: plugin exited
2022/01/05 10:05:38 [INFO] terraform: building graph: GraphTypeValidate
2022/01/05 10:05:38 [DEBUG] adding implicit provider configuration provider["registry.terraform.io/hashicorp/google"], implied first by module.infra.module.sa-identity.google_service_account.cluster_service_account
2022/01/05 10:05:38 [DEBUG] adding implicit provider configuration provider["registry.terraform.io/hashicorp/null"], implied first by module.infra.module.pgsql.null_resource.module_depends_on
2022/01/05 10:05:38 [DEBUG] adding implicit provider configuration provider["registry.terraform.io/hashicorp/google-beta"], implied first by module.infra.module.gke.google_container_cluster.this
2022/01/05 10:05:38 [DEBUG] adding implicit provider configuration provider["registry.terraform.io/hashicorp/kubernetes"], implied first by module.infra.module.gke.kubernetes_service_account.azure-pipelines-deploy
2022/01/05 10:05:38 [DEBUG] adding implicit provider configuration provider["registry.terraform.io/hashicorp/random"], implied first by module.infra.module.pgsql.random_password.password
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-external-events.google_project_iam_member.project" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-identity.google_project_iam_custom_role.vanguard" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-external-events.google_project_iam_custom_role.vanguard" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
ogle"] to serve module.infra.module.vpc.google_compute_shared_vpc_host_project.shared_vpc_host
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.vpc.google_compute_shared_vpc_host_project.shared_vpc_host" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_kms_key_ring.key_ring" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-identity.google_service_account.cluster_service_account" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_compute_firewall.services-firewall" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
module.infra.module.gke.data.google_container_cluster.cluster
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gke.data.google_container_cluster.cluster" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-infra.google_service_account_iam_member.main" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gke.google_container_node_pool.this" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google-beta"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-installer.google_project_iam_custom_role.vanguard" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_compute_global_address.google-managed-services-range" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.vanguard-bot.google_secret_manager_secret_version.this" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.pgsql.google_sql_user.additional_users" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
e_project_iam_custom_role.vanguard
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-infra.google_project_iam_custom_role.vanguard" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_project_service.apis" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-external-events.google_service_account_iam_member.main" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_compute_router.router" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.memorystore.google_redis_instance.memorystore_redis_instance" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-app.google_project_iam_member.project" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-validation.google_service_account_iam_member.main" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-installer.google_service_account_iam_member.main" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-app.google_service_account_iam_member.main" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gke.data.kubernetes_secret.ci" (*terraform.NodeValidatableResource) needs module.infra.module.gke.provider["registry.terraform.io/hashicorp/kubernetes"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.pgsql.google_sql_database_instance.replicas" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_kms_crypto_key.encryption-key" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-deployment.google_service_account_iam_member.main" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.cloud_nat.google_compute_router_nat.main" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.vpc.google_compute_network.network" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-installer.google_project_iam_member.project" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-app.google_service_account.cluster_service_account" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-validation.google_project_iam_custom_role.vanguard" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-validation.google_project_iam_member.project" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.pgsql.google_sql_database.additional_databases" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-identity.google_project_iam_member.project" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gcs.google_storage_bucket_iam_binding.viewers" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gcs.google_storage_bucket_iam_binding.admins" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gke.data.google_container_engine_versions.region" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-external-events.google_service_account.cluster_service_account" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.vpc.google_compute_subnetwork.subnetwork" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-infra.google_project_iam_member.project" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.pgsql.google_sql_user.default" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.data.google_compute_zones.available" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-deployment.google_service_account.cluster_service_account" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.pgsql.google_sql_database_instance.default" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google-beta"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.pgsql.null_resource.module_depends_on" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/null"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gke.data.google_client_config.provider" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_app_engine_application.app" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.pgsql.google_sql_database.default" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gke.kubernetes_cluster_role_binding.azure-pipelines-deploy-role-binding" (*terraform.NodeValidatableResource) needs module.infra.module.gke.provider["registry.terraform.io/hashicorp/kubernetes"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-app.google_project_iam_custom_role.vanguard" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-installer.google_service_account.cluster_service_account" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.pgsql.random_password.password" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/random"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gcs.google_storage_bucket_iam_binding.creators" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.vanguard-bot.google_service_account_key.bot" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-identity.google_service_account_iam_member.main" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-deployment.google_project_iam_member.project" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_compute_firewall.db_firewall" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_kms_key_ring.central_key_ring" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_cloud_tasks_queue.default" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.google_compute_global_address.default" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gcs.google_storage_bucket.bucket" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-deployment.google_project_iam_custom_role.vanguard" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.sa-infra.google_service_account.cluster_service_account" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.vanguard-bot.google_service_account.bot" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google"]
2022/01/05 10:05:38 [DEBUG] ProviderTransformer: "module.infra.module.gke.google_container_cluster.this" (*terraform.NodeValidatableResource) needs provider["registry.terraform.io/hashicorp/google-beta"]
8s_namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-app.local.permissions (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-app.var.create_workload_identity_service_accounts (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-app.var.project_id (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-app.var.service_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-app.var.workload_prefix (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-deployment.google_project_iam_custom_role.vanguard - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-deployment.google_project_iam_member.project - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-deployment.google_service_account.cluster_service_account - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-deployment.google_service_account_iam_member.main - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-deployment.local.k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-deployment.local.k8s_sa_gcp_derived_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-deployment.local.name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-deployment.local.namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-deployment.local.output_k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-deployment.local.output_k8s_namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-deployment.local.permissions (expand) - *terraform.nodeExpandLocal
reate_workload_identity_service_accounts (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-deployment.var.project_id (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-deployment.var.service_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-deployment.var.workload_prefix (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-external-events.google_project_iam_custom_role.vanguard - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-external-events.google_project_iam_member.project - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-external-events.google_service_account.cluster_service_account - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-external-events.google_service_account_iam_member.main - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-external-events.local.k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-external-events.local.k8s_sa_gcp_derived_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-external-events.local.name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-external-events.local.namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-external-events.local.output_k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-external-events.local.output_k8s_namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-external-events.local.permissions (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-external-events.var.create_workload_identity_service_accounts (expand) - *terraform.nodeExpandModuleVariable
 module.infra.module.sa-external-events.var.project_id (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-external-events.var.service_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-external-events.var.workload_prefix (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-identity.google_project_iam_custom_role.vanguard - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-identity.google_project_iam_member.project - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-identity.google_service_account.cluster_service_account - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-identity.google_service_account_iam_member.main - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-identity.local.k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-identity.local.k8s_sa_gcp_derived_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-identity.local.name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-identity.local.namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-identity.local.output_k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-identity.local.output_k8s_namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-identity.local.permissions (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-identity.var.create_workload_identity_service_accounts (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-identity.var.project_id (expand) - *terraform.nodeExpandModuleVariable
terraform.nodeExpandModuleVariable
  module.infra.module.sa-identity.var.workload_prefix (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-infra.google_project_iam_custom_role.vanguard - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-infra.google_project_iam_member.project - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-infra.google_service_account.cluster_service_account - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-infra.google_service_account_iam_member.main - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-infra.local.k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-infra.local.k8s_sa_gcp_derived_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-infra.local.name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-infra.local.namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-infra.local.output_k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-infra.local.output_k8s_namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-infra.local.permissions (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-infra.var.create_workload_identity_service_accounts (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-infra.var.project_id (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-infra.var.service_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-infra.var.workload_prefix (expand) - *terraform.nodeExpandModuleVariable
NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-installer.google_project_iam_member.project - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-installer.google_service_account.cluster_service_account - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-installer.google_service_account_iam_member.main - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-installer.local.k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-installer.local.k8s_sa_gcp_derived_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-installer.local.name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-installer.local.namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-installer.local.output_k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-installer.local.output_k8s_namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-installer.local.permissions (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-installer.var.create_workload_identity_service_accounts (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-installer.var.project_id (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-installer.var.service_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-installer.var.workload_prefix (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-validation.google_project_iam_custom_role.vanguard - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
t_iam_member.project - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-validation.google_service_account.cluster_service_account - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-validation.google_service_account_iam_member.main - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.sa-validation.local.k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-validation.local.k8s_sa_gcp_derived_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-validation.local.name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-validation.local.namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-validation.local.output_k8s_name (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-validation.local.output_k8s_namespace (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-validation.local.permissions (expand) - *terraform.nodeExpandLocal
  module.infra.module.sa-validation.var.create_workload_identity_service_accounts (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-validation.var.project_id (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-validation.var.service_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.sa-validation.var.workload_prefix (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vanguard-bot.google_secret_manager_secret.this - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.vanguard-bot.google_secret_manager_secret_version.this - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
 module.infra.module.vanguard-bot.google_service_account.bot - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.vanguard-bot.google_service_account_key.bot - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.vanguard-bot.output.bot_account (expand) - *terraform.nodeExpandOutput
  module.infra.module.vanguard-bot.var.create_vanguard_bot_service_account (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vanguard-bot.var.location (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vanguard-bot.var.project_id (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.google_compute_network.network - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.vpc.google_compute_shared_vpc_host_project.shared_vpc_host - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.vpc.google_compute_subnetwork.subnetwork - *terraform.NodeValidatableResource
    provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
  module.infra.module.vpc.local.subnets (expand) - *terraform.nodeExpandLocal
  module.infra.module.vpc.output.id (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.network (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.network_name (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.network_self_link (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.subnets (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.subnets_flow_logs (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.subnets_ips (expand) - *terraform.nodeExpandOutput
odule.vpc.output.subnets_names (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.subnets_private_access (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.subnets_regions (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.subnets_secondary_ranges (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.output.subnets_self_links (expand) - *terraform.nodeExpandOutput
  module.infra.module.vpc.var.auto_create_subnetworks (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.var.delete_default_internet_gateway_routes (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.var.description (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.var.network_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.var.project (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.var.routing_mode (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.var.secondary_ranges (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.var.shared_vpc_host (expand) - *terraform.nodeExpandModuleVariable
  module.infra.module.vpc.var.subnets (expand) - *terraform.nodeExpandModuleVariable
  module.infra.output.bot_account (expand) - *terraform.nodeExpandOutput
  module.infra.output.ca_cert (expand) - *terraform.nodeExpandOutput
  module.infra.output.ca_certificate (expand) - *terraform.nodeExpandOutput
  module.infra.output.ci_token (expand) - *terraform.nodeExpandOutput
  module.infra.output.db_ip (expand) - *terraform.nodeExpandOutput
  module.infra.output.db_password (expand) - *terraform.nodeExpandOutput
  module.infra.output.endpoint (expand) - *terraform.nodeExpandOutput
  module.infra.output.global_static_ip (expand) - *terraform.nodeExpandOutput
  module.infra.output.global_static_ip_name (expand) - *terraform.nodeExpandOutput
  module.infra.output.location (expand) - *terraform.nodeExpandOutput
n (expand) - *terraform.nodeExpandOutput
  module.infra.output.name (expand) - *terraform.nodeExpandOutput
  module.infra.output.nat_name (expand) - *terraform.nodeExpandOutput
  module.infra.output.private_address (expand) - *terraform.nodeExpandOutput
  module.infra.output.private_ip_address (expand) - *terraform.nodeExpandOutput
  module.infra.output.public_ip_address (expand) - *terraform.nodeExpandOutput
  module.infra.output.redis_ip (expand) - *terraform.nodeExpandOutput
  module.infra.output.redis_port (expand) - *terraform.nodeExpandOutput
  module.infra.output.router_name (expand) - *terraform.nodeExpandOutput
  module.infra.output.subnets_secondary_ranges (expand) - *terraform.nodeExpandOutput
  module.infra.var.api_services (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.app_engine_location (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.bucket_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.cluster_ipv4_cidr (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.create_cloud_task (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.create_memorystore (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.create_vanguard_bot_service_account (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.create_workload_identity_service_accounts (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.db_version (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.db_zone (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.deletion_protection (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.env (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.environment (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.ip_range_pods (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.ip_range_services (expand) - *terraform.nodeExpandModuleVariable
e
  module.infra.var.kubernetes_version (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.location (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.master_authorized_networks (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.network (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.node_pool_machine_type (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.project (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.project_code (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.redis_memory_size (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.redis_tier (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.secondary_ranges (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.services (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.sql_name (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.subnet_ip (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.subnetwork (expand) - *terraform.nodeExpandModuleVariable
  module.infra.var.workload_prefix (expand) - *terraform.nodeExpandModuleVariable
  output.bot_account (expand) - *terraform.nodeExpandOutput
  output.db_ip (expand) - *terraform.nodeExpandOutput
  output.db_password (expand) - *terraform.nodeExpandOutput
  output.db_port (expand) - *terraform.nodeExpandOutput
  output.db_user (expand) - *terraform.nodeExpandOutput
  output.global_ip (expand) - *terraform.nodeExpandOutput
  output.global_ip_name (expand) - *terraform.nodeExpandOutput
  output.location (expand) - *terraform.nodeExpandOutput
  output.name (expand) - *terraform.nodeExpandOutput
  output.redis_ip (expand) - *terraform.nodeExpandOutput
  output.redis_port (expand) - *terraform.nodeExpandOutput
  provider["registry.terraform.io/hashicorp/google"] - *terraform.NodeApplyableProvider
] - *terraform.NodeApplyableProvider
  provider["registry.terraform.io/hashicorp/kubernetes"] - *terraform.NodeApplyableProvider
  provider["registry.terraform.io/hashicorp/null"] - *terraform.NodeApplyableProvider
  provider["registry.terraform.io/hashicorp/random"] - *terraform.NodeApplyableProvider
  var.api_services - *terraform.NodeRootVariable
  var.bucket_name - *terraform.NodeRootVariable
  var.cluster_ipv4_cidr - *terraform.NodeRootVariable
  var.create_memorystore - *terraform.NodeRootVariable
  var.create_vanguard_bot_service_account - *terraform.NodeRootVariable
  var.create_workload_identity_service_accounts - *terraform.NodeRootVariable
  var.db_version - *terraform.NodeRootVariable
  var.db_zone - *terraform.NodeRootVariable
  var.env - *terraform.NodeRootVariable
  var.environment - *terraform.NodeRootVariable
  var.ip_range_pods - *terraform.NodeRootVariable
  var.ip_range_services - *terraform.NodeRootVariable
  var.kubernetes_version - *terraform.NodeRootVariable
  var.location - *terraform.NodeRootVariable
  var.master_authorized_networks - *terraform.NodeRootVariable
  var.name - *terraform.NodeRootVariable
  var.network - *terraform.NodeRootVariable
  var.node_pool_machine_type - *terraform.NodeRootVariable
  var.project - *terraform.NodeRootVariable
  var.project_code - *terraform.NodeRootVariable
  var.redis_memory_size - *terraform.NodeRootVariable
  var.redis_tier - *terraform.NodeRootVariable
  var.secondary_ranges - *terraform.NodeRootVariable
  var.sql_name - *terraform.NodeRootVariable
  var.subnet_ip - *terraform.NodeRootVariable
  var.subnetwork - *terraform.NodeRootVariable
  var.template_bucket_name - *terraform.NodeRootVariable
  ------
2022/01/05 10:05:38 [DEBUG] pruning unused provider["registry.terraform.io/hashicorp/kubernetes"]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.output.subnets_ips (expand)" references: [module.infra.module.vpc.google_compute_subnetwork.subnetwork]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra (expand)" references: []
nsformer: "var.environment" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.name (expand)" references: [var.name]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity.google_project_iam_member.project" references: [module.infra.module.sa-identity.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-identity.google_service_account.cluster_service_account module.infra.module.sa-identity.var.project_id (expand) module.infra.module.sa-identity.google_project_iam_custom_role.vanguard]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.local.k8s_name (expand)" references: [module.infra.module.sa-infra.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.admins (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.output.ca_crt (expand)" references: [module.infra.module.gke.data.kubernetes_secret.ci]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.var.secondary_ranges (expand)" references: [module.infra.var.subnetwork (expand) module.infra.var.ip_range_pods (expand) module.infra.var.ip_range_services (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app (close)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.data.google_compute_zones.available" references: [module.infra.var.project (expand) module.infra.var.location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity.google_service_account_iam_member.main" references: [module.infra.module.sa-identity.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-identity.google_service_account.cluster_service_account module.infra.module.sa-identity.local.k8s_sa_gcp_derived_name (expand)]
_host" references: [module.infra.module.vpc.google_compute_network.network module.infra.module.vpc.var.shared_vpc_host (expand) module.infra.module.vpc.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra (close)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-validation (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity.var.service_name (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.enable_shielded_nodes (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.memorystore.var.project (expand)" references: [module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.creators (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.initial_node_count (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vanguard-bot.google_secret_manager_secret_version.this" references: [module.infra.module.vanguard-bot.var.create_vanguard_bot_service_account (expand) module.infra.module.vanguard-bot.google_secret_manager_secret.this module.infra.module.vanguard-bot.google_service_account_key.bot]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.local.ip_configurations (expand)" references: [module.infra.module.pgsql.var.ip_configuration (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.subnet_ip" references: []
eployment.google_service_account.cluster_service_account module.infra.module.sa-deployment.var.project_id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.output.node_pool (expand)" references: [module.infra.module.gke.google_container_node_pool.this]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.var.create_workload_identity_service_accounts (expand)" references: [module.infra.var.create_workload_identity_service_accounts (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.project_code (expand)" references: [module.infra.var.project_code (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.basic_auth_password (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.ip_range_services (expand)" references: [var.ip_range_services]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.local.cluster_master_auth_map (expand)" references: [module.infra.module.gke.local.cluster_master_auth_list_layer2 (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-installer.local.name (expand)" references: [module.infra.module.sa-installer.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-validation.local.permissions (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.api_services (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "provider[\\"registry.terraform.io/hashicorp/random\\"]" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.google_storage_bucket_iam_binding.viewers" references: [module.infra.module.gcs.var.viewers (expand) module.infra.module.gcs.var.viewers (expand) module.infra.module.gcs.google_storage_bucket.bucket]
 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.local.output_k8s_namespace (expand)" references: [module.infra.module.sa-app.local.namespace (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.endpoint (expand)" references: [module.infra.module.gke.output.endpoint (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.ci_token (expand)" references: [module.infra.module.gke.output.ci_token (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.location" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.network (expand)" references: [module.infra.module.vpc.output.id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.google_service_account.cluster_service_account" references: [module.infra.module.sa-deployment.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-deployment.var.project_id (expand) module.infra.module.sa-deployment.local.name (expand) module.infra.module.sa-deployment.local.k8s_sa_gcp_derived_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.output.subnets_self_links (expand)" references: [module.infra.module.vpc.google_compute_subnetwork.subnetwork]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.output.instance_server_ca_cert (expand)" references: [module.infra.module.pgsql.google_sql_database_instance.default]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.memorystore.var.name (expand)" references: [module.infra.var.project_code (expand) module.infra.var.environment (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.source_subnetwork_ip_ranges_to_nat (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.description (expand)" references: []
)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-installer.google_project_iam_member.project" references: [module.infra.module.sa-installer.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-installer.google_service_account.cluster_service_account module.infra.module.sa-installer.var.project_id (expand) module.infra.module.sa-installer.google_project_iam_custom_role.vanguard]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.var.subnets (expand)" references: [module.infra.var.subnetwork (expand) module.infra.var.subnet_ip (expand) module.infra.var.location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.var.delete_default_internet_gateway_routes (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.local.permissions (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.provider[\\"registry.terraform.io/hashicorp/kubernetes\\"]" references: [module.infra.module.gke.data.google_container_cluster.cluster module.infra.module.gke.data.google_client_config.provider module.infra.module.gke.data.google_container_cluster.cluster]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.db_zone" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.create_timeout (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.project_code (expand)" references: [var.project_code]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.google_storage_bucket_iam_binding.admins" references: [module.infra.module.gcs.var.admins (expand) module.infra.module.gcs.google_storage_bucket.bucket module.infra.module.gcs.var.admins (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity.local.namespace (expand)" references: [module.infra.module.sa-identity.var.service_name (expand)]
10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.output.subnets_flow_logs (expand)" references: [module.infra.module.vpc.google_compute_subnetwork.subnetwork]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.private_ip_address (expand)" references: [module.infra.module.pgsql.output.private_ip_address (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.db_ip (expand)" references: [module.infra.module.pgsql.output.private_address (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.project_code" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.user_name (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "provider[\\"registry.terraform.io/hashicorp/null\\"]" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-installer.google_service_account_iam_member.main" references: [module.infra.module.sa-installer.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-installer.google_service_account.cluster_service_account module.infra.module.sa-installer.local.k8s_sa_gcp_derived_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.output.nat_ip_allocate_option (expand)" references: [module.infra.module.cloud_nat.google_compute_router_nat.main]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.output.instance_service_account_email_address (expand)" references: [module.infra.module.pgsql.google_sql_database_instance.default]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.pricing_plan (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.local.cluster_master_auth_list_layer1 (expand)" references: [module.infra.module.gke.local.cluster_output_master_auth (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.local.output_k8s_namespace (expand)" references: [module.infra.module.sa-infra.local.namespace (expand)]
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.google_compute_subnetwork.subnetwork" references: [module.infra.module.vpc.local.subnets (expand) module.infra.module.vpc.google_compute_network.network module.infra.module.vpc.var.project (expand) module.infra.module.vpc.var.secondary_ranges (expand) module.infra.module.vpc.var.secondary_ranges (expand) module.infra.module.vpc.var.secondary_ranges (expand)]
ut.global_static_ip (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.env (expand)" references: [var.environment]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.google_sql_database.default" references: [module.infra.module.pgsql.null_resource.module_depends_on module.infra.module.pgsql.google_sql_database_instance.default module.infra.module.pgsql.google_sql_database_instance.default module.infra.module.pgsql.var.db_name (expand) module.infra.module.pgsql.var.project (expand) module.infra.module.pgsql.var.db_charset (expand) module.infra.module.pgsql.var.db_collation (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.tcp_established_idle_timeout_sec (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vanguard-bot (close)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.output.master_version (expand)" references: [module.infra.module.gke.local.master_version (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.var.project_id (expand)" references: [module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.maintenance_window_hour (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.db_password (expand)" references: [module.infra.module.pgsql.output.generated_user_password (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.location (expand)" references: [module.infra.var.location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.local.master_authorized_networks_config (expand)" references: [module.infra.module.gke.var.master_authorized_networks (expand) module.infra.module.gke.var.master_authorized_networks (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.local.k8s_sa_gcp_derived_name (expand)" references: [module.infra.module.sa-deployment.var.project_id (expand) module.infra.module.sa-deployment.local.namespace (expand) module.infra.module.sa-deployment.local.k8s_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.output.region (expand)" references: [module.infra.module.cloud_nat.google_compute_router_nat.main]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.local.output_k8s_name (expand)" references: [module.infra.module.sa-infra.local.name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.master_version (expand)" references: [module.infra.module.gke.output.master_version (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity.local.k8s_name (expand)" references: [module.infra.module.sa-identity.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.log_config_enable (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.min_ports_per_vm (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.local.cluster_network_policy (expand)" references: [module.infra.module.gke.var.network_policy (expand) module.infra.module.gke.var.network_policy_provider (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.var.project_id (expand)" references: [module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.var.create_workload_identity_service_accounts (expand)" references: [module.infra.var.create_workload_identity_service_accounts (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "output.global_ip (expand)" references: [module.infra.output.global_static_ip (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-installer.google_service_account.cluster_service_account" references: [module.infra.module.sa-installer.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-installer.local.name (expand) module.infra.module.sa-installer.local.k8s_sa_gcp_derived_name (expand) module.infra.module.sa-installer.var.project_id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.memorystore.output.memorystore_port (expand)" references: [module.infra.module.memorystore.google_redis_instance.memorystore_redis_instance module.infra.module.memorystore.google_redis_instance.memorystore_redis_instance]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.nat_name (expand)" references: [module.infra.module.cloud_nat.output.name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-external-events.local.name (expand)" references: [module.infra.module.sa-external-events.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.region (expand)" references: [module.infra.var.location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.region (expand)" references: [module.infra.var.location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.local.namespace (expand)" references: [module.infra.module.sa-app.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.private_address (expand)" references: [module.infra.module.pgsql.output.private_ip_address (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.subnetwork" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.istio_disabled (expand)" references: [module.infra.var.istio_disabled (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.module_depends_on (expand)" references: [module.infra.google_service_networking_connection.private_service_access]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.workload_prefix (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-installer (close)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.google_service_account_iam_member.main" references: [module.infra.module.sa-app.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-app.google_service_account.cluster_service_account module.infra.module.sa-app.local.k8s_sa_gcp_derived_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.output.subnets_regions (expand)" references: [module.infra.module.vpc.google_compute_subnetwork.subnetwork]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.output.name (expand)" references: [module.infra.module.cloud_nat.google_compute_router_nat.main]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.name (expand)" references: [module.infra.module.gke.output.name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.var.routing_mode (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.zone (expand)" references: [module.infra.var.db_zone (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.location (expand)" references: [module.infra.module.gke.output.location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.ip_range_pods" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc (close)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.data.kubernetes_secret.ci" references: [module.infra.module.gke.kubernetes_service_account.azure-pipelines-deploy module.infra.module.gke.kubernetes_service_account.azure-pipelines-deploy]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.output.id (expand)" references: [module.infra.module.vpc.google_compute_network.network]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.horizontal_pod_autoscaling (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.google_sql_database_instance.default" references: [module.infra.module.pgsql.null_resource.module_depends_on module.infra.module.pgsql.var.encryption_key_name (expand) module.infra.module.pgsql.var.project (expand) module.infra.module.pgsql.var.deletion_protection (expand) module.infra.module.pgsql.var.root_password (expand) module.infra.module.pgsql.local.master_instance_name (expand) module.infra.module.pgsql.var.region (expand) module.infra.module.pgsql.var.database_version (expand) module.infra.module.pgsql.var.pricing_plan (expand) module.infra.module.pgsql.var.availability_type (expand) module.infra.module.pgsql.var.activation_policy (expand) module.infra.module.pgsql.var.disk_type (expand) module.infra.module.pgsql.var.disk_autoresize (expand) module.infra.module.pgsql.var.user_labels (expand) module.infra.module.pgsql.local.master_instance_name (expand) module.infra.module.pgsql.var.environment (expand) module.infra.module.pgsql.var.project_code (expand) module.infra.module.pgsql.var.tier (expand) module.infra.module.pgsql.var.disk_size (expand) module.infra.module.pgsql.var.backup_configuration (expand) module.infra.module.pgsql.local.ip_configurations (expand) module.infra.module.pgsql.local.ip_configuration_enabled (expand) module.infra.module.pgsql.var.database_flags (expand) module.infra.module.pgsql.var.zone (expand) module.infra.module.pgsql.var.maintenance_window_day (expand) module.infra.module.pgsql.var.maintenance_window_hour (expand) module.infra.module.pgsql.var.maintenance_window_update_track (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity.local.output_k8s_name (expand)" references: [module.infra.module.sa-identity.local.name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.deletion_protection (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.maintenance_start_time (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.project (expand)" references: [module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.google_compute_subnetwork.subnetwork" references: [module.infra.var.project_code (expand) module.infra.var.environment (expand) module.infra.var.location (expand) module.infra.module.vpc.output.network (expand) module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.sql_name" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.network_policy (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.db_charset (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.kubernetes_version (expand)" references: [var.kubernetes_version]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.subnet_ip (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.memorystore (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.google_compute_firewall.services-firewall" references: [module.infra.module.vpc.output.network (expand) module.infra.var.project (expand) module.infra.var.network (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.local.permissions (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.deletion_protection (expand)" references: [module.infra.var.deletion_protection (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.google_compute_firewall.db_firewall" references: [module.infra.module.vpc.output.network (expand) module.infra.var.project (expand) module.infra.var.network (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.output.instance_ip_address (expand)" references: [module.infra.module.pgsql.google_sql_database_instance.default]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.environment (expand)" references: [module.infra.var.environment (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.local.nat_ip_allocate_option (expand)" references: [module.infra.module.cloud_nat.var.nat_ip_allocate_option (expand) module.infra.module.cloud_nat.var.nat_ip_allocate_option (expand) module.infra.module.cloud_nat.local.default_nat_ip_allocate_option (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-validation.local.output_k8s_namespace (expand)" references: [module.infra.module.sa-validation.local.namespace (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.output.subnets_secondary_ranges (expand)" references: [module.infra.module.vpc.google_compute_subnetwork.subnetwork]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.name (expand)" references: [module.infra.var.bucket_name (expand) module.infra.var.bucket_name (expand) module.infra.var.project_code (expand) module.infra.var.environment (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.google_compute_router.router" references: [module.infra.module.vpc.output.network (expand) module.infra.var.project (expand) module.infra.var.location (expand) module.infra.var.project_code (expand) module.infra.var.environment (expand)]
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.google_sql_user.additional_users" references: [module.infra.module.pgsql.null_resource.module_depends_on module.infra.module.pgsql.google_sql_database_instance.default module.infra.module.pgsql.local.users (expand) module.infra.module.pgsql.var.user_host (expand) module.infra.module.pgsql.google_sql_database_instance.default module.infra.module.pgsql.random_password.password module.infra.module.pgsql.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.google_project_iam_custom_role.vanguard" references: [module.infra.module.sa-infra.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-infra.var.project_id (expand) module.infra.module.sa-infra.local.permissions (expand) module.infra.module.sa-infra.var.workload_prefix (expand) module.infra.module.sa-infra.var.service_name (expand) module.infra.module.sa-infra.var.workload_prefix (expand) module.infra.module.sa-infra.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.bucket_name" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.http_load_balancing (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "output.db_port (expand)" references: [module.infra.output.global_static_ip (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-validation.local.namespace (expand)" references: [module.infra.module.sa-validation.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.secondary_ranges" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.local.name (expand)" references: [module.infra.module.sa-app.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.versioning (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.var.workload_prefix (expand)" references: [module.infra.var.workload_prefix (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.var.project_id (expand)" references: [module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.node_locations (expand)" references: [module.infra.data.google_compute_zones.available]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.node_pool_machine_type (expand)" references: [var.node_pool_machine_type]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.data.google_client_config.provider" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.ca_cert (expand)" references: [module.infra.module.gke.output.ca_certificate (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.template_bucket_name" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-validation.local.k8s_sa_gcp_derived_name (expand)" references: [module.infra.module.sa-validation.var.project_id (expand) module.infra.module.sa-validation.local.namespace (expand) module.infra.module.sa-validation.local.k8s_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.bucket_policy_only (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-validation.google_service_account.cluster_service_account" references: [module.infra.module.sa-validation.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-validation.local.name (expand) module.infra.module.sa-validation.local.k8s_sa_gcp_derived_name (expand) module.infra.module.sa-validation.var.project_id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.local.cluster_master_auth_list_layer2 (expand)" references: [module.infra.module.gke.local.cluster_master_auth_list_layer1 (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.local.k8s_name (expand)" references: [module.infra.module.sa-app.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.project_code (expand)" references: [module.infra.var.project_code (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.delete_timeout (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vanguard-bot (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.subnetwork (expand)" references: [module.infra.var.subnetwork (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.app_engine_location (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.google_app_engine_application.app" references: [module.infra.var.create_cloud_task (expand) module.infra.var.project (expand) module.infra.var.app_engine_location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.output.generated_user_password (expand)" references: [module.infra.module.pgsql.random_password.password]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-external-events.var.project_id (expand)" references: [module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.environment (expand)" references: [module.infra.var.environment (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.db_name (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.local.master_instance_name (expand)" references: [module.infra.module.pgsql.var.name (expand) module.infra.module.pgsql.var.name (expand) module.infra.module.pgsql.var.environment (expand) module.infra.module.pgsql.var.project_code (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "output.bot_account (expand)" references: [module.infra.output.bot_account (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.cluster_ipv4_cidr" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.google_service_account.cluster_service_account" references: [module.infra.module.sa-infra.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-infra.local.name (expand) module.infra.module.sa-infra.local.k8s_sa_gcp_derived_name (expand) module.infra.module.sa-infra.var.project_id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.var.description (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.activation_policy (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.secondary_ranges (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.data.google_container_cluster.cluster" references: [module.infra.module.gke.google_container_cluster.this module.infra.module.gke.var.location (expand) module.infra.module.gke.var.project (expand) module.infra.module.gke.local.name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.google_service_account_iam_member.main" references: [module.infra.module.sa-infra.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-infra.local.k8s_sa_gcp_derived_name (expand) module.infra.module.sa-infra.google_service_account.cluster_service_account]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.redis_memory_size" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.local.output_k8s_namespace (expand)" references: [module.infra.module.sa-deployment.local.namespace (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.global_static_ip_name (expand)" references: [module.infra.google_compute_global_address.default]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "output.db_user (expand)" references: [module.infra.output.global_static_ip (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.var.create_workload_identity_service_accounts (expand)" references: [module.infra.var.create_workload_identity_service_accounts (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity.var.project_id (expand)" references: [module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vanguard-bot.google_secret_manager_secret.this" references: [module.infra.module.vanguard-bot.var.create_vanguard_bot_service_account (expand) module.infra.module.vanguard-bot.var.project_id (expand) module.infra.module.vanguard-bot.var.location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.data.google_container_engine_versions.region" references: [module.infra.module.gke.var.location (expand) module.infra.module.gke.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.local.nat_ips_length (expand)" references: [module.infra.module.cloud_nat.var.nat_ips (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-external-events (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.output.subnets_names (expand)" references: [module.infra.module.vpc.google_compute_subnetwork.subnetwork]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.output.instance_first_ip_address (expand)" references: [module.infra.module.pgsql.google_sql_database_instance.default]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-external-events.var.service_name (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.router (expand)" references: [module.infra.google_compute_router.router]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.memorystore.output.memorystore_host (expand)" references: [module.infra.module.memorystore.google_redis_instance.memorystore_redis_instance]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.create_vanguard_bot_service_account" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.tier (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-external-events.google_project_iam_member.project" references: [module.infra.module.sa-external-events.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-external-events.google_project_iam_custom_role.vanguard module.infra.module.sa-external-events.google_service_account.cluster_service_account module.infra.module.sa-external-events.var.project_id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.local.k8s_sa_gcp_derived_name (expand)" references: [module.infra.module.sa-app.var.project_id (expand) module.infra.module.sa-app.local.namespace (expand) module.infra.module.sa-app.local.k8s_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-external-events.local.namespace (expand)" references: [module.infra.module.sa-external-events.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.local.namespace (expand)" references: [module.infra.module.sa-deployment.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vpc.output.subnets_private_access (expand)" references: [module.infra.module.vpc.google_compute_subnetwork.subnetwork]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.services (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.create_memorystore (expand)" references: [var.create_memorystore]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.enable_private_endpoint (expand)" references: []
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.key"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.google_container_node_pool.this" references: [module.infra.module.gke.var.node_pools (expand) module.infra.module.gke.local.default_node_pool_name (expand) module.infra.module.gke.var.project (expand) module.infra.module.gke.var.location (expand) module.infra.module.gke.google_container_cluster.this module.infra.module.gke.google_container_cluster.this module.infra.module.gke.var.node_pools_metadata (expand) module.infra.module.gke.var.cluster_resource_labels (expand) module.infra.module.gke.local.name (expand) module.infra.module.gke.var.project_code (expand) module.infra.module.gke.var.environment (expand) module.infra.module.gke.var.node_pools_tags (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.memorystore.var.create_memorystore (expand)" references: [module.infra.var.create_memorystore (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.subnetworks (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.master_authorized_networks (expand)" references: [module.infra.var.master_authorized_networks (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.monitoring_service (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.create_vanguard_bot_service_account (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.project_code (expand)" references: [module.infra.var.project_code (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.udp_idle_timeout_sec (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.tcp_transitory_idle_timeout_sec (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.logging_service (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.additional_users (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.availability_type (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity.local.k8s_sa_gcp_derived_name (expand)" references: [module.infra.module.sa-identity.var.project_id (expand) module.infra.module.sa-identity.local.namespace (expand) module.infra.module.sa-identity.local.k8s_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.output.ca_certificate (expand)" references: [module.infra.module.gke.output.ca_certificate (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-external-events.var.create_workload_identity_service_accounts (expand)" references: [module.infra.var.create_workload_identity_service_accounts (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-identity (close)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-validation.var.workload_prefix (expand)" references: [module.infra.var.workload_prefix (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.master_authorized_networks (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.local.name (expand)" references: [module.infra.module.gke.var.name (expand) module.infra.module.gke.var.name (expand) module.infra.module.gke.var.project_code (expand) module.infra.module.gke.var.environment (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.local.cluster_output_master_auth (expand)" references: [module.infra.module.gke.google_container_cluster.this]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.redis_tier" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.output.instance_connection_name (expand)" references: [module.infra.module.pgsql.google_sql_database_instance.default]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.storage_class (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.google_kms_key_ring.central_key_ring" references: [module.infra.var.project_code (expand) module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.project_code (expand)" references: [module.infra.var.project_code (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra (close)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-installer.local.output_k8s_name (expand)" references: [module.infra.module.sa-installer.local.name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.environment (expand)" references: [module.infra.var.environment (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.node_pools_metadata (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-app.google_service_account.cluster_service_account" references: [module.infra.module.sa-app.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-app.local.name (expand) module.infra.module.sa-app.local.k8s_sa_gcp_derived_name (expand) module.infra.module.sa-app.var.project_id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.database_flags (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-installer.google_project_iam_custom_role.vanguard" references: [module.infra.module.sa-installer.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-installer.var.workload_prefix (expand) module.infra.module.sa-installer.var.service_name (expand) module.infra.module.sa-installer.local.permissions (expand) module.infra.module.sa-installer.var.workload_prefix (expand) module.infra.module.sa-installer.var.service_name (expand) module.infra.module.sa-installer.var.project_id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.cluster_resource_labels (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.create_workload_identity_service_accounts (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.memorystore.var.memory_size (expand)" references: [module.infra.var.redis_memory_size (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.kubernetes_cluster_role_binding.azure-pipelines-deploy-role-binding" references: [module.infra.module.gke.var.environment (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.var.update_timeout (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gcs.var.kms_key_name (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.kubernetes_version (expand)" references: [module.infra.var.kubernetes_version (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.google_compute_global_address.google-managed-services-range" references: [module.infra.var.project (expand) module.infra.var.network (expand) module.infra.module.vpc.output.id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.vanguard-bot.google_service_account.bot" references: [module.infra.module.vanguard-bot.var.create_vanguard_bot_service_account (expand) module.infra.module.vanguard-bot.var.project_id (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.local.name (expand)" references: [module.infra.module.sa-infra.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.var.workload_prefix (expand)" references: [module.infra.var.workload_prefix (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-installer.var.project_id (expand)" references: [module.infra.var.project (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.subnetwork (expand)" references: []
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [ERROR] ReferenceTransformer: reference not found: "each.value"
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.google_sql_database_instance.replicas" references: [module.infra.module.pgsql.google_sql_database_instance.default module.infra.module.pgsql.local.replicas (expand) module.infra.module.pgsql.google_sql_database_instance.default module.infra.module.pgsql.var.zone (expand) module.infra.module.pgsql.local.master_instance_name (expand) module.infra.module.pgsql.var.read_replica_name_suffix (expand) module.infra.module.pgsql.var.database_version (expand) module.infra.module.pgsql.var.project (expand) module.infra.module.pgsql.var.disk_type (expand) module.infra.module.pgsql.var.disk_autoresize (expand) module.infra.module.pgsql.var.user_labels (expand) module.infra.module.pgsql.var.tier (expand) module.infra.module.pgsql.var.disk_size (expand) module.infra.module.pgsql.var.zone (expand) module.infra.module.pgsql.var.create_timeout (expand) module.infra.module.pgsql.var.delete_timeout (expand) module.infra.module.pgsql.var.update_timeout (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "var.kubernetes_version" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.memorystore.var.region (expand)" references: [module.infra.var.location (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.local.name (expand)" references: [module.infra.module.sa-deployment.var.service_name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-deployment.local.permissions (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-infra.google_project_iam_member.project" references: [module.infra.module.sa-infra.var.create_workload_identity_service_accounts (expand) module.infra.module.sa-infra.var.project_id (expand) module.infra.module.sa-infra.google_project_iam_custom_role.vanguard module.infra.module.sa-infra.google_service_account.cluster_service_account]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.nat_ip_allocate_option (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.cloud_nat.var.icmp_idle_timeout_sec (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.var.cluster_ipv4_cidr (expand)" references: []
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.local.master_version (expand)" references: [module.infra.module.gke.var.kubernetes_version (expand) module.infra.module.gke.var.kubernetes_version (expand) module.infra.module.gke.data.google_container_engine_versions.region]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.sa-validation.local.output_k8s_name (expand)" references: [module.infra.module.sa-validation.local.name (expand)]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.gke.output.location (expand)" references: [module.infra.module.gke.google_container_cluster.this]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.ip_range_pods (expand)" references: [var.ip_range_pods]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.module.pgsql.output.replicas_instance_server_ca_certs (expand)" references: [module.infra.module.pgsql.google_sql_database_instance.replicas]
2022/01/05 10:05:38 [DEBUG] ReferenceTransformer: "module.infra.var.redis_memory_size (expand)" references: [var.redis_memory_size]
`,M={title:"@nonfx/flow-log/f-log",parameters:{controls:{hideNoControlsWarning:!0}}},a={render:r=>{const f=g(),s=g(),L=u=>{f.value&&(f.value.searchKeyword=u.detail.value)},c=()=>{s.value&&(s.value.open=!s.value.open)};return e`<f-div direction="column" height="100%" overflow="scroll">
            <f-div height="hug-content" style="display:none"
                ><f-search @input=${L}></f-search
            ></f-div>

            <f-popover
                ${p(s)}
                target="#log-actions"
                .overlay=${!1}
                @overlay-click=${c}
                size="hug-content"
                placement="bottom"
            >
                <f-div width="220px" direction="column">
                    ${[{icon:"i-download",text:"Download"},{icon:"i-indent",text:"Indent"},{icon:"i-expand-3",text:"Expand"}].map(u=>e`<f-div
                            state="secondary"
                            padding="medium"
                            gap="medium"
                            clickable
                            align="middle-left"
                        >
                            <f-icon size="small" .source=${u.icon}></f-icon>
                            <f-text variant="para" size="medium" weight="regular">${u.text}</f-text>
                        </f-div>`)}
                </f-div>
            </f-popover>
            <f-div>
                <f-log
                    ${p(f)}
                    .label=${r.label}
                    .logs=${r.logs}
                    ?show-toolbar=${r["show-toolbar"]}
                    ?wrap-text=${r["wrap-text"]}
                    .logLevels=${r["log-levels"]}
                    .selectedLogLevel=${r["selected-log-level"]}
                    .searchKeyword=${r["search-keyword"]}
                >
                    <f-div gap="small" slot="header" width="100%" align="middle-left">
                        <f-text inline>Status:</f-text>
                        <f-icon source="i-tick" loading></f-icon>
                        <f-text>Running since 2 mins...</f-text>
                    </f-div>
                    <f-icon-button
                        @click=${c}
                        slot="actions"
                        icon="i-more"
                        state="neutral"
                        category="packed"
                        id="log-actions"
                    ></f-icon-button>
                </f-log> </f-div
        ></f-div>`},name:"Playground",argTypes:{label:{control:"text"},logs:{control:"text"},"show-toolbar":{control:"boolean"},"wrap-text":{control:"boolean"},"highlight-keywords":{control:"object"},"log-levels":{control:"object"},"selected-log-level":{control:"text"},"search-keyword":{control:"text"}},args:{label:"Logs",logs:o,"show-toolbar":!0,"wrap-text":!1,"log-levels":["ALL","ERROR","WARN","DEBUG","INFO","TRACE","FATAL"],"selected-log-level":"ALL","highlight-keywords":{terraform:"#BF40BF",ReferenceTransformer:"#00E2B5"}}},n={render:()=>e`
            <f-div direction="column" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large">logs are passed using 'logs' attribute</f-text>
                </f-div>
                <f-div><f-log .logs=${o}></f-log></f-div>
            </f-div>
        `,name:"logs"},d={render:()=>e`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large"
                        >if show-toolbar="true" then Search, Filter and Jump to Line is shown</f-text
                    >
                </f-div>
                <f-div><f-log ?show-toolbar=${!0} .logs=${o}></f-log></f-div>
            </f-div>
        `,name:"show-toolbar"},l={render:()=>e`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large"
                        >Only "Error", "Warn", "Debug" log level is shown in drodown</f-text
                    >
                </f-div>
                <f-div>
                    <f-log
                        ?show-toolbar=${!0}
                        .logs=${o}
                        .logLevels=${["Error","Warn","Debug"]}
                        .selectedLogLevel=${"Debug"}
                    ></f-log>
                </f-div>
            </f-div>
        `,name:"log-levels"},i={render:()=>e`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large">Only "Error" log level is selected</f-text>
                </f-div>
                <f-div>
                    <f-log
                        ?show-toolbar=${!0}
                        .logs=${o}
                        .logLevels=${["Error","Warn","Debug"]}
                        .selectedLogLevel=${"Error"}
                    ></f-log>
                </f-div>
            </f-div>
        `,name:"selected-log-level"},t={render:()=>e`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large"
                        >Set wrap-text="true" if you want to wrap log lines</f-text
                    >
                </f-div>
                <f-div>
                    <f-log wrap-text .logs=${o}></f-log>
                </f-div>
            </f-div>
        `,name:"wrap-text"},m={render:()=>e`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large"
                        >'terraform' and '' are highlighted with "#BF40BF" and "#00E2B5" respectively by using
                        object : '{ terraform: "#BF40BF", ReferenceTransformer: "#00E2B5" }'</f-text
                    >
                </f-div>
                <f-div>
                    <f-log
                        .highlightKeywords=${{terraform:"#BF40BF",ReferenceTransformer:"#00E2B5"}}
                        .logs=${o}
                    ></f-log>
                </f-div>
            </f-div>
        `,name:"highlight-keywords"};var _,v,x;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const logElement = createRef<FLog>();
    const popoverElement = createRef<FPopover>();
    const handleExternalSearch = (event: CustomEvent<{
      value: string;
    }>) => {
      if (logElement.value) {
        logElement.value.searchKeyword = event.detail.value;
      }
    };
    const toggleOptions = () => {
      if (popoverElement.value) {
        popoverElement.value.open = !popoverElement.value.open;
      }
    };
    return html\`<f-div direction="column" height="100%" overflow="scroll">
            <f-div height="hug-content" style="display:none"
                ><f-search @input=\${handleExternalSearch}></f-search
            ></f-div>

            <f-popover
                \${ref(popoverElement)}
                target="#log-actions"
                .overlay=\${false}
                @overlay-click=\${toggleOptions}
                size="hug-content"
                placement="bottom"
            >
                <f-div width="220px" direction="column">
                    \${[{
      icon: "i-download",
      text: "Download"
    }, {
      icon: "i-indent",
      text: "Indent"
    }, {
      icon: "i-expand-3",
      text: "Expand"
    }].map(op => {
      return html\`<f-div
                            state="secondary"
                            padding="medium"
                            gap="medium"
                            clickable
                            align="middle-left"
                        >
                            <f-icon size="small" .source=\${op.icon}></f-icon>
                            <f-text variant="para" size="medium" weight="regular">\${op.text}</f-text>
                        </f-div>\`;
    })}
                </f-div>
            </f-popover>
            <f-div>
                <f-log
                    \${ref(logElement)}
                    .label=\${args.label}
                    .logs=\${args.logs}
                    ?show-toolbar=\${args["show-toolbar"]}
                    ?wrap-text=\${args["wrap-text"]}
                    .logLevels=\${args["log-levels"]}
                    .selectedLogLevel=\${args["selected-log-level"]}
                    .searchKeyword=\${args["search-keyword"]}
                >
                    <f-div gap="small" slot="header" width="100%" align="middle-left">
                        <f-text inline>Status:</f-text>
                        <f-icon source="i-tick" loading></f-icon>
                        <f-text>Running since 2 mins...</f-text>
                    </f-div>
                    <f-icon-button
                        @click=\${toggleOptions}
                        slot="actions"
                        icon="i-more"
                        state="neutral"
                        category="packed"
                        id="log-actions"
                    ></f-icon-button>
                </f-log> </f-div
        ></f-div>\`;
  },
  name: "Playground",
  argTypes: {
    label: {
      control: "text"
    },
    logs: {
      control: "text"
    },
    ["show-toolbar"]: {
      control: "boolean"
    },
    ["wrap-text"]: {
      control: "boolean"
    },
    ["highlight-keywords"]: {
      control: "object"
    },
    ["log-levels"]: {
      control: "object"
    },
    ["selected-log-level"]: {
      control: "text"
    },
    ["search-keyword"]: {
      control: "text"
    }
  },
  args: {
    label: "Logs",
    logs: samplelogs,
    ["show-toolbar"]: true,
    ["wrap-text"]: false,
    ["log-levels"]: ["ALL", "ERROR", "WARN", "DEBUG", "INFO", "TRACE", "FATAL"],
    ["selected-log-level"]: "ALL",
    ["highlight-keywords"]: {
      terraform: "#BF40BF",
      ReferenceTransformer: "#00E2B5"
    }
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var E,R,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return html\`
            <f-div direction="column" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large">logs are passed using 'logs' attribute</f-text>
                </f-div>
                <f-div><f-log .logs=\${samplelogs}></f-log></f-div>
            </f-div>
        \`;
  },
  name: "logs"
}`,...(b=(R=n.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var h,T,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return html\`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large"
                        >if show-toolbar="true" then Search, Filter and Jump to Line is shown</f-text
                    >
                </f-div>
                <f-div><f-log ?show-toolbar=\${true} .logs=\${samplelogs}></f-log></f-div>
            </f-div>
        \`;
  },
  name: "show-toolbar"
}`,...(y=(T=d.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var k,B,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return html\`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large"
                        >Only "Error", "Warn", "Debug" log level is shown in drodown</f-text
                    >
                </f-div>
                <f-div>
                    <f-log
                        ?show-toolbar=\${true}
                        .logs=\${samplelogs}
                        .logLevels=\${["Error", "Warn", "Debug"]}
                        .selectedLogLevel=\${"Debug"}
                    ></f-log>
                </f-div>
            </f-div>
        \`;
  },
  name: "log-levels"
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var U,G,w;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return html\`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large">Only "Error" log level is selected</f-text>
                </f-div>
                <f-div>
                    <f-log
                        ?show-toolbar=\${true}
                        .logs=\${samplelogs}
                        .logLevels=\${["Error", "Warn", "Debug"]}
                        .selectedLogLevel=\${"Error"}
                    ></f-log>
                </f-div>
            </f-div>
        \`;
  },
  name: "selected-log-level"
}`,...(w=(G=i.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var V,N,j;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    return html\`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large"
                        >Set wrap-text="true" if you want to wrap log lines</f-text
                    >
                </f-div>
                <f-div>
                    <f-log wrap-text .logs=\${samplelogs}></f-log>
                </f-div>
            </f-div>
        \`;
  },
  name: "wrap-text"
}`,...(j=(N=t.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,O,P;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    return html\`
            <f-div direction="column" gap="medium" height="100%">
                <f-div height="hug-content">
                    <f-text state="warning" size="large"
                        >'terraform' and '' are highlighted with "#BF40BF" and "#00E2B5" respectively by using
                        object : '{ terraform: "#BF40BF", ReferenceTransformer: "#00E2B5" }'</f-text
                    >
                </f-div>
                <f-div>
                    <f-log
                        .highlightKeywords=\${{
      terraform: "#BF40BF",
      ReferenceTransformer: "#00E2B5"
    }}
                        .logs=\${samplelogs}
                    ></f-log>
                </f-div>
            </f-div>
        \`;
  },
  name: "highlight-keywords"
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Z=["Playground","Logs","ShowToolbar","LogLevels","SelectedLogLevel","WrapText","HighlightKeywords"],z=Object.freeze(Object.defineProperty({__proto__:null,HighlightKeywords:m,LogLevels:l,Logs:n,Playground:a,SelectedLogLevel:i,ShowToolbar:d,WrapText:t,__namedExportsOrder:Z,default:M},Symbol.toStringTag,{value:"Module"}));export{z as F,a as P};
