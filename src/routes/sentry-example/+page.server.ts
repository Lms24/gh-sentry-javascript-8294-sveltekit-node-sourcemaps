export const load = async () => {
	helperFunction();
	return {
		msg: 'hi from server'
	};
};

function helperFunction() {
	throw new Error('This is an server load error - is it source-mapped?');
}
