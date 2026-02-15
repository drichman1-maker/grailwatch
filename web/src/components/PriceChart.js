// ═══════════════════════════════════════════
// GrailWatch — Price Chart (Canvas)
// ═══════════════════════════════════════════

export function renderPriceChart(pricePoints, containerId = 'priceChart') {
    if (!pricePoints || pricePoints.length < 2) return '';

    return `
    <div class="chart-container" id="${containerId}">
      <div class="chart-header">
        <span style="font-weight: 700; font-size: var(--text-lg); color: var(--text-primary);">Price History</span>
        <span style="font-size: var(--text-xs); color: var(--text-secondary);">${pricePoints.length} sales</span>
      </div>
      <canvas class="chart-canvas" id="${containerId}Canvas"></canvas>
      <div class="chart-dates">
        <span>${formatChartDate(pricePoints[0].date)}</span>
        <span>${formatChartDate(pricePoints[pricePoints.length - 1].date)}</span>
      </div>
    </div>
  `;
}

function formatChartDate(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function drawPriceChart(pricePoints, canvasId = 'priceChartCanvas') {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !pricePoints || pricePoints.length < 2) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const pad = { top: 10, right: 10, bottom: 10, left: 10 };
    const chartW = w - pad.left - pad.right;
    const chartH = h - pad.top - pad.bottom;

    const prices = pricePoints.map(p => p.price);
    const minP = Math.min(...prices) * 0.95;
    const maxP = Math.max(...prices) * 1.05;
    const range = maxP - minP;

    function x(i) { return pad.left + (i / (pricePoints.length - 1)) * chartW; }
    function y(price) { return pad.top + chartH - ((price - minP) / range) * chartH; }

    // Read CSS variables for colors
    const style = getComputedStyle(document.documentElement);
    const accentColor = style.getPropertyValue('--accent').trim() || '#6C5CE7';
    const gridColor = style.getPropertyValue('--border').trim() || 'rgba(255,255,255,0.06)';

    // Grid lines
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 4; i++) {
        const gy = pad.top + (chartH / 3) * i;
        ctx.beginPath();
        ctx.moveTo(pad.left, gy);
        ctx.lineTo(w - pad.right, gy);
        ctx.stroke();
    }

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, pad.top, 0, h - pad.bottom);
    gradient.addColorStop(0, hexToRgba(accentColor, 0.3));
    gradient.addColorStop(1, hexToRgba(accentColor, 0.02));

    ctx.beginPath();
    ctx.moveTo(x(0), h - pad.bottom);
    pricePoints.forEach((p, i) => ctx.lineTo(x(i), y(p.price)));
    ctx.lineTo(x(pricePoints.length - 1), h - pad.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    pricePoints.forEach((p, i) => {
        if (i === 0) ctx.moveTo(x(i), y(p.price));
        else ctx.lineTo(x(i), y(p.price));
    });
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.stroke();

    // Dots
    pricePoints.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(x(i), y(p.price), 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    });
}

function hexToRgba(hex, alpha) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
