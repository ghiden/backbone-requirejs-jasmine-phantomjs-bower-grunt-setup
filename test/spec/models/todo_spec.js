define(['models/todo'], function(Todo) {
  describe("Todo Model", function() {
    it("should have a default empty string title", function() {
      console.log('testing');
      var t = new Todo();
      expect(t.get('title')).toBe('');
    });
  });
});

