class Interpreter {
	run_ast(ast){
		let m_tok_stream=ast.get_stream();
		if(m_tok_stream.length==0)return;
		console.log(m_tok_stream[0]);
	}
}