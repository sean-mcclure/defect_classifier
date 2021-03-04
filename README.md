
# PCB Defect Classifier Application

This application uses image processing and Deep Learning to detect and extract defects from Printed Circuit Board (PCB) images and predict their defect type. For details see the Medium post here (at ref).

See the [Medium article](https://towardsdatascience.com/building-an-end-to-end-deep-learning-defect-classifier-application-for-printed-circuit-board-pcb-6361b3a76232) for more details on the construction and running of this application.

### Get the Application
`git clone https://github.com/sean-mcclure/defect_classifier.git`

### Install Requirements
run `pip install -r requirements.txt` in your console

### Add Image Files to Defect Classifier Application

    test_temps
    └── 000410009_temp.jpg
    └── 000410009_test.jpg
    └── 00041012_temp.jpg
    └── 00041012_test.jpg
    ...
    └── test_temps.json

### Add Model to Application (or use the preinstalled model)

    mv ../Desktop/**defect_classifier.pkl** model/

### Start the Service
    python api/app.py

### Result

![enter image description here](https://collaboratescience.com/stack/defect_classifier.gif)

## SUPPORT
If you need help modifying this application for your specific purposes please contact Sean McClure.