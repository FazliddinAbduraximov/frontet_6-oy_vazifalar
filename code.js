const nameInput = document.querySelector('.name')
const guruhInput = document.querySelector('.guruh')
const sendBtn = document.querySelector('.send')
const showDiv = document.querySelector('.show')

let students = JSON.parse(localStorage.getItem('students')) || []

function show() {
    showDiv.innerHTML = ''
    students.forEach((s, i) => {
        const item = document.createElement('div')
        item.className = 'flex-row justify-between items-center w-full mb-3 border-b border-gray-300 pb-2'
        item.innerHTML = `
            <dev class="flex justify-between">
                <div class="flex-row text-lg">
                    <span class="font-semibold">${s.name}</span> - ${s.guruh}
                </div>
                <div class="flex gap-3">
                    <button class="update bg-yellow-500 text-white px-3 py-1 rounded" data-id="${i}">Update</button>
                    <button class="delete bg-red-600 text-white px-3 py-1 rounded" data-id="${i}">Delete</button>
                </div>
            </dev>
        `
        showDiv.appendChild(item)
    })
}

show()

sendBtn.addEventListener('click', () => {
    const name = nameInput.value.trim()
    const guruh = guruhInput.value.trim()

    if (name === '' || guruh === '') return

    students.push({ name, guruh })
    localStorage.setItem('students', JSON.stringify(students))
    show()

    nameInput.value = ''
    guruhInput.value = ''
})

showDiv.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        const id = e.target.dataset.id
        students.splice(id, 1)
        localStorage.setItem('students', JSON.stringify(students))
        show()
    }

    if (e.target.classList.contains('update')) {
        const id = e.target.dataset.id
        const s = students[id]
        const newName = prompt('Yangi ism kiriting:', s.name)
        const newGuruh = prompt('Yangi guruh kiriting:', s.guruh)
        if (newName && newGuruh) {
            students[id] = { name: newName, guruh: newGuruh }
            localStorage.setItem('students', JSON.stringify(students))
            show()
        }
    }
})
