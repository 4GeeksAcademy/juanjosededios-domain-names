const elemento = document.querySelector(".domain");
    const pronoun = ['the', 'our'];

    const adj = ['great', 'big'];

    const noun = ['jogger', 'racoon'];

    for(let i=0; i< pronoun.length;i++){
        // pronoun.forEach(pronoun => {   Lo comento porque se puede hacer con el for y con el ForEach
        adj.forEach(adj=> {
            noun.forEach(nouns=> {
                const parrafo=document.createElement("p")
                parrafo.innerHTML = pronoun[i] + adj + nouns+  ".com"
                elemento.appendChild(parrafo)
                
            })
        })
        //});
    }
