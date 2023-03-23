import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import { useRef, useState } from 'react';

// beforeImage, afterImage為圖片路徑 string
const ComparisonSlider = ({ beforeImage, afterImage }) => {
    const ref = useRef(null)
    // 設定置中
    const [left, setLeft] = useState("50%");
    const [width, setWidth] = useState("50%");
    
    // desktop用
    const onDragStart = (e) => {
        e.preventDefault()

        // 父層左距離 = 螢幕左距離 - ((螢幕寬 - 父元件寬) / 2 )) 註解:((螢幕寬 - 父元件寬) / 2 )) = 左右側餘白寬
        let position = e.pageX - ((window.innerWidth - ref.current.clientWidth) / 2)
        if (position < 0) {
            setLeft(0)
            setWidth(0)
        } else if (position > ref.current.clientWidth) {
            setLeft(ref.current.clientWidth)
            setWidth(ref.current.clientWidth)
        } else {
            setLeft(position)
            setWidth(position)
        }
    }

    // mobile用
    const onTouchStart = (e) => {
        let touch = e.changedTouches[0];

        // 父層左距離 = 螢幕左距離 - ((螢幕寬 - 父元件寬) / 2 )) 註解:((螢幕寬 - 父元件寬) / 2 )) = 左右側餘白寬
        let position = touch.clientX - ((window.innerWidth - ref.current.clientWidth) / 2)
        if (position < 0) {
            setLeft(0)
            setWidth(0)
        } else if (position > ref.current.clientWidth) {
            setLeft(ref.current.clientWidth)
            setWidth(ref.current.clientWidth)
        } else {
            setLeft(position)
            setWidth(position)
        }
    }

    return (
        // 據說onDragOver會影響最後pageX變0
        <div onDragOver={(e) => e.preventDefault()}>
            <div className='max-w-[1400px] my-0 mx-auto'>
                {/* pb-[68.23%] 這應該照圖片變化 */}
                <div className="w-[calc(100%-2rem)] mx-4 my-8 relative">
                    {/* 撐開用要同樣尺寸圖片，以before為基礎 */}
                    <img
                        src={beforeImage}
                    />
                    {/* 右側圖片 */}
                    <div style={{
                        backgroundImage: `url("${afterImage}")`
                    }} className="h-full w-full absolute top-0 left-0 bg-cover" ref={ref}>
                    </div>
                    {/* 左側圖片 */}
                    <div style={{
                        width,
                        backgroundImage: `url("${beforeImage}")`
                    }} className="h-full absolute top-0 left-0 bg-cover overflow-hidden">
                    </div>
                    {/* 滑桿 */}
                    <div draggable onTouchMove={(e) => onTouchStart(e)} onDrag={(e) => onDragStart(e)} onDragOver={(e) => e.preventDefault()}>
                        <div style={{ left }} className="w-[5px] h-full absolute bg-rose-500 top-0 cursor-ew-resize translate-x-[-50%] hover:opacity-100 transition-all"></div>
                        <div style={{ left }} className="absolute border-[5px] border-rose-500 bg-white rounded-full top-1/2 p-2 cursor-ew-resize translate-x-[-50%] translate-y-[-50%] hover:opacity-100 transition-all">
                            <SwitchLeftIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonSlider;
