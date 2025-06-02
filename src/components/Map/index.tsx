import dynamic from "next/dynamic";

const MyMap = dynamic(() => import('./DynamicMap/DynamicMap'), {
    ssr: false
});

export default MyMap