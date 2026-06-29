const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.classList.add('visible'); }
            });
        }, { threshold: .12 });
        reveals.forEach(el => observer.observe(el));

        document.querySelectorAll('.faq-q').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.parentElement;
                document.querySelectorAll('.faq-item').forEach(i => { if (i !== item) i.classList.remove('active'); });
                item.classList.toggle('active');
            });
        });