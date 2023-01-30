function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A" + player_A)
    OLED.newLine()
    OLED.writeStringNewLine("player b" + player_B)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds" + rounds)
}
let rounds = 0
let Ties = 0
let player_B = 0
let player_A = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Let's play rock paper scissors")
player_A = 0
player_B = 0
Ties = 0
rounds = 0
basic.pause(2000)
update_scoreboard()
