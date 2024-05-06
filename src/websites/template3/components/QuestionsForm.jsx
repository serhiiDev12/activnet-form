import * as React from 'react';
import {Card, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";

export default function QuestionsForm() {
    return (
        <div className="template-three-question-form">
            <Card className="template-three-question-form-grid">
                <div className="template-three-question-form-img"></div>
                <div className="template-three-question-form-form">
                    <h4>Have a question?</h4>
                    <p>We're ready to answer!</p>
                    <div className="flex-inline">
                        <TextField label="First Name"/>
                        <TextField label="Last Name"/>
                    </div>
                    <TextField label="Email"/>
                    <TextField label="Question" multiline rows={3}/>
                    <FormGroup>
                        <FormControlLabel
                            label="I agnowledged I'll be contacted about my question"
                            control={<Checkbox
                            />}
                        />
                    </FormGroup>
                    <button type="submit" className="template-three-contact-form-button">Submit</button>
                </div>
            </Card>
        </div>
    )
}