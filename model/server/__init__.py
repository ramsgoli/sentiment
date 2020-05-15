from flask import Flask, request
import joblib
import os

def create_app():
    app = Flask(__name__)

    vectorizer = joblib.load(os.path.join(app.root_path, 'Vectorizer.joblib.bz2'))
    clf = joblib.load(os.path.join(app.root_path, 'LogisticRegression.joblib.bz2'))

    @app.route('/sentiment', methods=['POST'])
    def sentiment():
        req = request.json
        text = req['text']

        vectorized = vectorizer.transform([text])
        pred = clf.predict(vectorized)
        return {
            'response': 'positive' if pred[0] == 1 else 'negative'
        }

    return app
