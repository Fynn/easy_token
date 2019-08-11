# EASY_TOKEN

It's an easy token generator, for your projects.

##
## TOKEN TYPES

|                				|Numbers|Uppercase Letters|Lowercase Letters|
|-------------------------------|-------|-----------------|-----------------|
|***generateToken***			| YES	| YES			  | YES             |
|***generateNumberToken***      | YES	| NO			  | NO				|
|***generateLetterToken***      | NO	| YES			  | YES				|
|***generateUppercaseToken***   | NO	| YES			  |	NO				|
|***generateLowercaseToken***   | NO	| NO			  | YES				|

##
## USAGE EXAMPLES

      ‎ 
      ‎ var easyToken = require('easy_token');
	
	
	  ‎ var token = easyToken.generateToken(6);
	  ‎ console.log(token);
	
	  ‎ // OUTPUT EXAMPLE >> "Jfp3JH"


	  ‎ var token = easyToken.generateUppercaseToken();
	  ‎ console.log(token);
	
	  ‎ // OUTPUT EXAMPLE >> "DYLUQJWFJXK"
	  ‎
##
  
	


