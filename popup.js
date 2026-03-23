(async () => {
    try {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        let result = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                const regexCpf = /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g;

                let inputs = document.querySelectorAll("input");

                for (let input of inputs) {
                    let valor = input.value;
                    if (!valor) continue;

                    let match = valor.match(regexCpf);
                    if (match) return match[0].replace(/\D/g, "");
                }

                let texto = document.body.innerText;
                let encontrados = texto.match(regexCpf);

                return encontrados ? encontrados[0].replace(/\D/g, "") : null;
            }
        });

        let cpf = result && result[0] ? result[0].result : null;

        if (cpf) {
            try {
                await navigator.clipboard.writeText(cpf);
            } catch (err) {
                let textarea = document.createElement("textarea");
                textarea.value = cpf;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }

            document.body.innerHTML = `
        <div style="font-family: Arial; padding:9px; text-align:center;">
          <strong>CPF copiado!</strong><br><br>
          ${cpf}
        </div>
      `;
        } else {
            document.body.innerHTML = `
        <div style="font-family: Arial; padding:9px; text-align:center;">
          Nenhum CPF encontrado
        </div>
      `;
        }

    } catch (erro) {
        console.error(erro);

        document.body.innerHTML = `
      <div style="font-family: Arial; padding:9px; text-align:center;">
        Erro ao executar extensão
      </div>
    `;
    }
})();