require("minitest/autorun")
require("minitest/rg")
require_relative("../cardgame")
require_relative("../card")

class CardgameTest < MiniTest::Test

def setup()
  @card_1 = Card.new("spades", 1)
  @card_2 = Card.new("hearts", 3)
  @cards = [@card_1,@card_2]
  @game = CardGame.new(@cards)
end

def test_suit()
  assert_equal("hearts",@card_2.suit)
end

def test_checkforAce()
  assert_equal(true, @game.checkforAce(@card_1))
end

def test_highest_card()
  assert_equal("3 hearts wins", @game.highest_card(@card_1,@card_2))
end

def test_cards_total
  assert_equal("You have a total of 4", @game.cards_total(@cards))
end

end
