// ═══════════════════════════════════════════
// GrailWatch — SPA Router (hash-based)
// ═══════════════════════════════════════════

let routes = {};
let currentCleanup = null;

export function registerRoute(path, handler) {
    routes[path] = handler;
}

export function navigate(path) {
    window.location.hash = path;
}

export function getCurrentRoute() {
    return window.location.hash.slice(1) || '/';
}

export function getRouteParams(pattern, path) {
    // Simple pattern matching: /comic/:id -> { id: 'asm300' }
    const patternParts = pattern.split('/');
    const pathParts = path.split('/');
    if (patternParts.length !== pathParts.length) return null;

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
            params[patternParts[i].slice(1)] = decodeURIComponent(pathParts[i]);
        } else if (patternParts[i] !== pathParts[i]) {
            return null;
        }
    }
    return params;
}

function resolveRoute() {
    const path = getCurrentRoute();
    const app = document.getElementById('app');

    // Cleanup previous page
    if (currentCleanup) {
        currentCleanup();
        currentCleanup = null;
    }

    // Try exact match first
    if (routes[path]) {
        currentCleanup = routes[path](app, {}) || null;
        return;
    }

    // Try parametric routes
    for (const [pattern, handler] of Object.entries(routes)) {
        const params = getRouteParams(pattern, path);
        if (params) {
            currentCleanup = handler(app, params) || null;
            return;
        }
    }

    // 404 fallback
    if (routes['/']) {
        currentCleanup = routes['/'](app, {}) || null;
    }
}

export function initRouter() {
    window.addEventListener('hashchange', resolveRoute);
    // Initial route
    if (!window.location.hash) {
        window.location.hash = '/';
    } else {
        resolveRoute();
    }
}
