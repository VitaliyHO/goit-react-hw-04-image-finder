import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <div>
            <RotatingLines
                strokeColor="#3f51b5"
                strokeWidth="5"
                animationDuration="0.75"
                width="46"
                visible={true}
            />
        </div>
    )
}