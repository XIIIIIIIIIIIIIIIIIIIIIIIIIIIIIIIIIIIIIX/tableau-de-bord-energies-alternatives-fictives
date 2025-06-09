document.addEventListener('DOMContentLoaded', function() {
            // Animation des barres
            const bars = document.querySelectorAll('.bar-fill');
            bars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.height = `${70 + index * 10}%`;
                }, 300 * index);
            });

            // Mise à jour dynamique des données
            function updateData() {
                document.querySelector('.solar .value').innerHTML = 
                    `${Math.floor(120 + Math.random() * 20)}<span class="unit">GW</span>`;
                
                document.querySelector('.lunar .value').innerHTML = 
                    `${Math.floor(75 + Math.random() * 15)}<span class="unit">GW</span>`;
                
                document.querySelector('.magic .value').innerHTML = 
                    `${Math.floor(90 + Math.random() * 15)}<span class="unit">GW</span>`;
                
                document.querySelector('.quantum .value').innerHTML = 
                    `${Math.floor(50 + Math.random() * 20)}<span class="unit">GW</span>`;
            }

            setInterval(updateData, 5000);
        });