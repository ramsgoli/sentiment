from joblib import load

vectorizer = load('Vectorizer.joblib')
clf = load('LogisticRegression.joblib')

text = [
    'I cannot believe this movie was allowed to be produced. This was complete garbage and I will not watch again',
    'This was a great movie - I loved it very much!'
]

transformed = vectorizer.transform(text)
print(clf.predict_proba(transformed))
print(clf.decision_function(transformed))
print(clf.predict(transformed))
