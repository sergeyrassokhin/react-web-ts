
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

class RecordDescriptor {
 private:
  const vector<string> fields_;

 public:
  RecordDescriptor(const vector<string>& fields_) : fields_(fields_) {}
};

class Record {
 protected:
  unordered_map<string, string> data_;
  RecordDescriptor descr_;

 public:
  Record(RecordDescriptor descr) : descr_(descr){};
  string& get(const string& field);
  void set(const string& field, const string& value);
};

const auto& RecordA_Descriptor = RecordDescriptor({"name", "age"});

class RecordA : Record {
 public:
  RecordA() : Record(RecordA_Descriptor){};

  const string& get_name() { return get("name"); }
  void set_name(const string& name) { set("name", name); }

  const string& get_age() { return get("age"); }
  void set_age(const string& name) { set("age", name); }
};

template <typename T>
void test(T input) {
  std::cout << input << std::endl;
}