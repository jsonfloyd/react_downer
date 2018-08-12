const delimeter = '/';
export default function parse(parent, path) {
	const nodes = path.split(delimeter);
	const [
		name,
		type,
	] = nodes[nodes.indexOf(parent) + 1].split('.');
	const result = {
		name,
		type: type !== undefined ? type : 'folder',
		path,
		childrens: [],
	};
	console.log(result);
	return result;
}
