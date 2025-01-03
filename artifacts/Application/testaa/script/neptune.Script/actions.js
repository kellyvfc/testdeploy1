const onGetData = async () => {
    try {
        const opts = {
            parameters: {
                where: JSON.stringify({ name: 'Veronica' }),
                // select: "", // Optional
                // take: "", // Optional
                // skip: "", // Optional
                // order: "", // Optional
            },
        };
        await apigetTestTable(opts);
    } catch (e) {
        console.log(e);
    }
};

const onError = (xhr) => {
    console.log("Error");
};

const onSuccess = (xhr) => {
    console.log("onSuccess");
};

const onPreHook = (xhr) => {
    console.log("onPreHook");
};
