const addBtn=document.querySelector("#addBtn");

const main = document.querySelector("#main");

addBtn.addEventListener("click",function(){
    addNote();
})

const addNote= (text= "",title="")=>{
    const note=document.createElement("div")
    note.classList.add("note")
    console.log(note)
    note.innerHTML=`
    <div class="icons">
    <i class="save fas fa-save" style="color:red"></li>
    <i class="trash fas fa-trash" style="color:yellow"> </i> 
    </div>
    <div class="title-div">
        <textarea class="title" 
            placeholder="Write the title ...">${title}
        </textarea>
    </div>
    <textarea class="content" 
        placeholder="Note down your thoughts ...">${text}
    </textarea>`;
    function handleTrashClick() {
        note.remove();
        saveNotes();
    }
    function handleSaveClick() {
        saveNotes();
    }
    const delBtn = note.querySelector(".trash");
    const saveButton = note.querySelector(".save");
    const textareas = note.querySelectorAll("textarea");

    delBtn.addEventListener("click", handleTrashClick);
    saveButton.addEventListener("click", handleSaveClick);
    main.appendChild(note);
    saveNotes();
}
const saveNotes = () => {

    // Select content textareas
    const notes = 
        document.querySelectorAll(".note .content"); 
        
    // Select title textareas
    const titles = 
        document.querySelectorAll(".note .title"); 

    const data = [];

    notes.forEach((note, index) => {
        const content = note.value;
        const title = titles[index].value;
        console.log(title);
        if (content.trim() !== "") {
            data.push({ title, content });
        }
    });

    const titlesData = 
        data.map((item) => item.title);
    console.log(titlesData);
    localStorage.setItem(
        "titles", JSON.stringify(titlesData));

    const contentData = 
        data.map((item) => item.content);
    localStorage.setItem(
        "notes", JSON.stringify(contentData));
};
