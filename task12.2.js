window.addEventListener("DOMContentLoaded", function() {
    class options {
        constructor (height, width, bg, frontSize, textAlign) {
            this.height = height,
            this.width = width,
            this.bg = bg,
            this.frontSize = frontSize,
            this.textAlign = textAlign;
        }
        createDiv (string) {
            let div = document.createElement("div");

            document.body.appendChild(div);
            div.textContent = string;
            div.style.height = this.height;
            div.style.background = this.bg;
            div.style.frontSize = this.frontSize;
            div.style.width = this.width;
            div.style.textAlign = this.textAlign;

        }
    }

    let a = new options(10,15,20,25,30);

    a.createDiv ("Hello World");
});