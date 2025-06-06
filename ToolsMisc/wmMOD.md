# WM MOD

## Switching Environments

There are three different environments: 
- production
- staging
- 

## Builds

- Due to the obfuscator we need to add the `[Skip]` attribute to all classes that will be serialized to text. That generally means request/response objects used in server calls. Make sure to serialize any nested classes used as well. An example: 
```c#
using Beebyte.Obfuscator;

[Skip]
public class ResponseExample
{
  public SpecialClass[] class;
}

[Skip]
public class SpecialClass
{
  public string someField;
  public AnotherClass nestedClassField;
}

[Skip]
public class AnotherClass
{
  public string someOtherField;
}
```
