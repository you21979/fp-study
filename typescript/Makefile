######################################################
#config
######################################################
TSC = tsc
NODE = node
NPM = npm
COMPILE = $(TSC) --sourcemap --target ES5
EXEC = $(COMPILE) -e

#make target
MAIN = lambda.ts
SRCDIR = .

######################################################
#make
######################################################

exec:
	$(EXEC) $(MAIN)

clean:
	-rm *.js *.js.map
