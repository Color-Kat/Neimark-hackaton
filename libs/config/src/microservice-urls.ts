export const microserviceUrls = {
    web: `${process.env.WEB_HOST || 'localhost'}:${process.env.WEB_PORT || '8000'}`,
    apiGateway: `${process.env.API_GATEWAY_HOST || 'localhost'}:${process.env.API_GATEWAY_PORT || '3000'}`,
    python: `${process.env.PYTHON_HOST || 'localhost'}:${process.env.PYTHON_PORT || '4000'}`,
}