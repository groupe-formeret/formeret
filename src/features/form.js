function form() {

    const radioImgWrappers = document.querySelectorAll('.form_radioimg-wrapper')
    if (!radioImgWrappers) return

    radioImgWrappers.forEach(radioImgWrapper => {
        const radioImgs = radioImgWrapper.querySelectorAll('.form_radioimg')
        /* in vanilla for each .form_radioimg click, find the input and check it */
        radioImgs.forEach(item => {
            item.addEventListener('click', () => {
                radioImgs.forEach(item => {
                    item.classList.remove('active');
                    item.classList.add('unactive');
                    const input = item.querySelector('input')
                    input.checked = false
                })
                item.classList.add('active');
                item.classList.remove('unactive');
                const input = item.querySelector('input')
                input.checked = true
            })
        })
    })



}

export default form