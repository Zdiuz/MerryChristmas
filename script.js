for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 10 + 5;
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.width = snowflake.style.height = size + 'px';
    snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';
    snowflake.style.animationDelay = Math.random() * 2 + 's';
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    snowContainer.appendChild(snowflake);
}
