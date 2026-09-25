import './BonusChart.scss';

const BonusChart = () => {

    const percentage = 0;

    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    const dashOffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="chart">
            <div className="chart-ring">

                <svg
                    className="chart-svg"
                    viewBox="0 0 180 180"
                >
                    <circle
                        className="chart-track"
                        cx="90"
                        cy="90"
                        r={radius}
                    />

                    <circle
                        className="chart-progress"
                        cx="90"
                        cy="90"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                    />
                </svg>

                <div className="chart-center">
                    <span>{percentage ? `${percentage}%` : '—'}</span>
                    <small>Премии</small>
                </div>

            </div>

            <div className="chart-legend">
                <div className="legend-item">
                    <span className="legend-color bonus"></span>
                    Получат премию
                </div>

                <div className="legend-item">
                    <span className="legend-color regular"></span>
                    Остальные
                </div>
            </div>
        </div>
    );
};

export default BonusChart;