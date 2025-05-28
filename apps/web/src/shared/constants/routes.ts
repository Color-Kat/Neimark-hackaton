export const ROUTES = {
    HOME        : '/',

    HISTORY     : '/history',
    SCANNER     : '/scanner',
    PROFILE     : '/profile',

    SCAN_DETAILS: (scanId: string) => `/scans/${scanId}`,
} as const;