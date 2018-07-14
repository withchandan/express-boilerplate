export default (message, field) => {
	
	const err = new Error(message)
	err.field = field
	return err
}
