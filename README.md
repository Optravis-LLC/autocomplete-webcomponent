# Service Charge Tool UI (sc-tool)
The web frontend of the sc-tool. Uses the [sc-tool backend](https://github.com/Optravis-LLC/service-charges-backend).

- test: https://test.sctool.optravis.com/optravis
- prod: https://sctool.optravis.com/optravis

## Local Setup

The frontend requires `node` to run. The version is defined in `package.json`. For the frontend to work, it requires a running backend. 

### Tools to install

* [node](https://nodejs.org/en/download)

### Perform common tasks

* `npm ci` to clean and install dependencies
* `npm start` to run the frontend

### Environment variables

| variable            | description                  | local value           |
|---------------------|------------------------------|-----------------------|
| VITE_BACKEND_SERVER | The url to the backend.      | http://localhost:8080 |
| VITE_PUBLIC_URL     | The public url.              | <empty>               |
| VITE_AUTH0_DISABLED | Disables the authentication. | true                  |


## Deployment
The deployment is being done via GitHub actions to the Azure.

### GitHub actions
The deployment is being done per stage. The table below shows the GitHub actions for the frontend, their descriptions, and triggers.
| Name | Stage | Description | Triggers |  
| ------ | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |  
| [deploy-test-swa.yml](.github%2Fworkflows%2Fdeploy-test-swa.yml) | Test| Deploys the frontend to the Azure **TEST** environment. | Push to `main` branch |  
| [deploy-prod-swa.yml](.github%2Fworkflows%2Fdeploy-prod-swa.yml) | Prod| Deploys the frontend to the Azure **PROD** environment.  | Push to `release` branch | 
| [deploy-infra.yml](.github%2Fworkflows%2Fdeploy-infra.yml) | Both| Deploys infrastructure using Bicep.  | Manual | 

### Frontend GitHub actions secrets
| Name                          | Description                                    |
|-------------------------------|------------------------------------------------|
| `AZURE_SC_TOOL_UI_TEST_TOKEN` | Test deployment token for azure static web app |
| `AZURE_SC_TOOL_UI_PROD_TOKEN` | Prod deployment token for azure static web app |

#### NOTES:
- As the frontend is tenant agnostic, a single frontend is being deployed per stage of the application. 
- The routing from the frontend to the different backends is handled by Azure Front Door.