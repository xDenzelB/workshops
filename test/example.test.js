// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderParticipant } from '../render-utils.js';

const test = QUnit.test;

test('Should get a DIV element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<p class="name-part"></p><p class="contact-part"></p>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant('div');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.innerHTML, expected);
});
