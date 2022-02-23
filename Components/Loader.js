import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loader() {
    return (
        <>
            <div className="mt-4">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <p>
                        <Skeleton count={44} />
                    </p>
                </SkeletonTheme>
            </div>
        </>
    );
}