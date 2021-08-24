class Token {
}
class SyntaxToken extends Token {
	constructor(v) {
		super();
		console.log(v);
		this.v = v;
	}
}
class OpToken extends Token {
	constructor(v) {
		super();
		console.log(v);
		this.v = v;
	}
}
class Literal extends Token {
	set_lit_text(value) {
		this.v = value;
	}
}
class LParaToken extends SyntaxToken { };
class RParaToken { };
class AddToken extends OpToken { };
class HexLiteral extends Literal { };
function panic(str) {
	throw Error(str);
}
function lex(m_str) {
	let index = 0;
	let lex_tok_arr = [];
	fl: for (; index < m_str.length;) {
		let c = m_str[index];
		switch (c) {
			case '()'[0]: {
				lex_tok_arr.push(new LPara(c));
				break;
			}
			case '()'[1]: {
				lex_tok_arr.push(new RPara(c));
				break;
			}
			case '+': {
				lex_tok_arr.push(new AddToken(c));
				break;
			}
			case '0': {
				let lit = new HexLiteral;
				if (m_str[index + 1] != 'x') {
					panic('lex error');
				}
				let acc_str = '';
				acc_str += '0x';
				let ci = index + 2;
				let cc = m_str[ci];
				for (; ci < m_str.length && cc.match(/[a-fA-F0-9]/); ci++) {
					cc = m_str[ci];
					acc_str += cc;
				}
				index=ci;
				lit.set_lit_text(acc_str);
				lex_tok_arr.push(lit);
				break;
			}
			default:
				if (c.charCodeAt(0) > 20) { };
				console.log('bad char in lex', c, c.charCodeAt(0));
				break fl;
		}
	}
	return lex_tok_arr;
}