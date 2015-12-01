#include <node.h>
#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

namespace beep {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  Beep(1000,100);
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "beep", Method);
}

NODE_MODULE(addon, init)

}  