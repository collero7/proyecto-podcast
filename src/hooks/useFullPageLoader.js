import React, { useState } from 'react';
import BackDrop from '@components/ui/backDrop/BackDrop';

const useFullPageLoader = () => {
    const [loading, setLoading] = useState(false);

    return [
        loading ? <BackDrop /> : null,
        () => setLoading(true),
        () => setLoading(false)
    ];
};

export default useFullPageLoader;