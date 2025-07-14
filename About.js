document.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');

        function switchTab(targetId) {
            contents.forEach(content => {
                content.classList.remove('active');
            });

            const targetContent = document.getElementById(targetId);

            targetContent.classList.add('fade-in');
            targetContent.classList.add('active');

            setTimeout(() => {
                targetContent.classList.remove('fade-in');
            }, 300);
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {

                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const targetId = tab.getAttribute('data-tab');
                switchTab(targetId);
            });
        });
    });
