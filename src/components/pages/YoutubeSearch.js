import React, {useRef} from "react";

const YoutubeSearch = ({onSearch}) => {
    const inputRef = useRef();//정보변경할때 민감
    
    const resultSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () => {
        console.log("onclick");
        resultSearch();
    }
    const onKeyPress = () => {
        console.log("onKeyPress");
        resultSearch();
    }
    return (
        <div className="title">
            <h2>검색하기</h2>
            <input 
                ref={inputRef}
                type="search" 
                placeholder="검색하시오" 
                onKeyPress={onKeyPress} 
            />
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    )
}

export default YoutubeSearch;