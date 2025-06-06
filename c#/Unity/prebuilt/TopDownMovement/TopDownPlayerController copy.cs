using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
[RequireComponent(typeof(Animator))]

// https://www.youtube.com/watch?v=whzomFgjT50
public class TopDownController : MonoBehaviour
{

	public float moveSpeed = 5f;


	private Rigidbody2D _body;
	private Animator _animator;

	private Vector2 _input;

	void Start()
	{
		_body = GetComponent<Rigidbody2D>();
		_animator = GetComponent<Animator>();
	}

	void Update()
	{
		_input = new Vector2(
			Input.GetAxis("Horizontal"),
			Input.GetAxis("Vertical")
		).normalized;
	}

	void FixedUpdate()
	{
		// for non-kinematic movement
		_body.velocity = _input * moveSpeed;

		// for kinematic movement
		// _body.MovePosition(_body.position + _input * moveSpeed * Time.fixedDeltaTime);
	}
}
