const search = document.getElementById("searchbox");
const submit = document.getElementById("submitbutton");



const searchemoji = () => {
    const value = search.value;
    const list = emojiList.filter((e) => {
        if (e.aliases.some(ele => ele.startsWith(value))) {
            return true;
        }
        if (e.tags.some(ele => ele.startsWith(value))) {
            return true;
        }
        return false; 
    });

    const container = document.getElementById("container");
    
    
    container.innerHTML = "";

    list.forEach((ele) => {
        const emojiDiv = document.createElement("div");
        emojiDiv.className = "emoji-item";

        const emoji = document.createElement("span");
        emoji.innerText = ele.emoji;
        emoji.className = "emoji";

        const hori = document.createElement("hr");
        


        const description = document.createElement("span");
        description.innerText = ele.description;
        description.className = "description";

        const category = document.createElement("span");
        category.innerText = ele.category;
        category.className = "category";
        
        emojiDiv.appendChild(emoji);
       
        emojiDiv.appendChild(description);
        emojiDiv.appendChild(category);
        emojiDiv.appendChild(hori);
        container.appendChild(emojiDiv);
    });
}


    submit.addEventListener("click",searchemoji);

    


