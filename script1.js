/**
 * В базовой реализации нельзя было менять цвет на изначальный при повторном клике,
 * я подумал что это было бы правильно и сделал просто через if-else
 *Единственное я не совсем понял как бы мне в defaultColor подтянуть цвет из background напрямую, а не отдельно задавать таким же цветом
 */
const blocks = document.querySelectorAll('.block');
const defaultColor = 'gray';
const colorOtherClick = 'blue';

blocks.forEach(block => {
    block.onclick = function() {
        if (this.style.background == colorOtherClick) {
            this.style.background = defaultColor;
        } else {
            this.style.background = colorOtherClick;
        }
    };
});