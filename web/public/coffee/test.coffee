number = 42
opposite = true

number = -42 if opposite

square = (x) -> x * x

footprints = yeti ? "bear"

person =
  first_name: "Antonel"
  last_name: "Pazargic"

class Person
  constructor: (options) ->
    {@name, @age, @height} = options

tim = new Person age: 4

author = "Wittgenstein"
quote  = "A picture is a fact. -- #{ author }"