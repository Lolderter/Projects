 function oblicz() {
            const cenyKursow = { React: 5000, Javascript: 3000 };
            const checkboxReact = document.getElementById("React");
            const checkboxJavascript = document.getElementById("Javascript");
            const n_raty = parseInt(document.getElementById("raty").value);
            const miasto = document.getElementById("miasto").value;

            if (!checkboxReact.checked && !checkboxJavascript.checked) {
                alert("Wybierz przynajmniej jeden kurs!");
                return;
            }

            let suma = 0;
            if (checkboxReact.checked) suma += cenyKursow.React;
            if (checkboxJavascript.checked) suma += cenyKursow.Javascript;

            const rata = suma / n_raty;

            document.getElementById("result").textContent = 
                `Kurs odbędzie się w ${miasto}. Koszt całkowity: ${suma} zł. Płacisz ${n_raty} rat po ${rata.toFixed(2)} zł.`;
        }