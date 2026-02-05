import rectangle from "./assets/Rectangle 9.png";
function NewsLetter() {
    return (
        <div>
            <div>
                <img src={rectangle} alt="Newsletter" className="w-full h-auto object-cover"/>
            </div>
        </div>
    );
}
export default NewsLetter;