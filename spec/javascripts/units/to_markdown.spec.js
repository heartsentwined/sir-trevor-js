describe("toMarkdown", function(){

  it("converts links to markdown", function(){
    var html = "<a href='http://google.com'>test</a>",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("[test](http://google.com)");
  });

  it("converts links with bolds inside to markdown", function(){
    var html = "<a href='http://google.com'><strong>test</strong></a>",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("[**test**](http://google.com)");
  });

  it("converts links with square brackets correctly", function(){
    var html = "[<a href='http://google.com'>1</a>]",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("\\[[1](http://google.com)\\]");
  });

  it("converts links with images inside correctly", function(){
    var html = '<a href="https://test.com" data-link-name="anchor image" class="link-image "><img src="http://static.guim.co.uk/sys-images/Guardian/Pix/audio/video/2013/8/20/1376989050190/models-smoking-london-001.jpg" width="140" height="84" alt="models smoking london"></a>',
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("");
  });

  it("coverts bold to markdown", function(){
    var html = "<strong>testing</strong>",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("**testing**");
  });

  it("coverts bold tags without closing tags to markdown", function(){
    var html = "<strong>testing</strong><strong>",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("**testing**");
  });

  it("coverts italic to markdown", function(){
    var html = "<em>testing</em>",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("_testing_");
  });

  it("coverts paragraphs to newlines", function(){
    var html = "<p>testing</p>",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("testing\n\n\n\n");
  });

  it("coverts br's to newlines", function(){
    var html = "testing<br>",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("testing\n\n");
  });

  it("removes comments", function(){
    var html = "<!--Yo!-->",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("");
  });

  it("coverts a complex piece of text correctly", function(){
    var html = "<p><a href=\"#\">Hello</a> this is my <strong>amazing <em>piece</em></strong> <em>I think</em> that <strong>it should</strong> be able to be convereted correctly.</p>",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("[Hello](#) this is my **amazing _piece_** _I think_ that **it should** be able to be convereted correctly.\n\n\n\n");
  });

  it("correctly encodes * characters", function(){
    var html = "test*",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("test\\*");
  });

  it("correctly encodes _ characters", function(){
    var html = "test_",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("test\\_");
  });

  it("correctly encodes - characters", function(){
    var html = "test-something",
        markdown = SirTrevor.toMarkdown(html, "Text");

    expect(markdown).toBe("test\\-something");
  });

});