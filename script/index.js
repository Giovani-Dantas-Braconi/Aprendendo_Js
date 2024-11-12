async function buscarCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        if (data.erro) {
          alert("CEP não encontrado!");
          return;
        }

        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('complemento').value = data.complemento || '';
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;

        document.getElementById('rua').disabled = false;
        document.getElementById('bairro').disabled = false;
        document.getElementById('complemento').disabled = false;
        document.getElementById('cidade').disabled = false;
        document.getElementById('uf').disabled = false;

      } catch (error) {
        alert("Erro ao buscar o CEP. Tente novamente.");
      }
    } else {
      alert("Por favor, insira um CEP válido com 8 dígitos.");
    }
  }